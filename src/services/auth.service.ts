import { cookies } from 'next/headers';
import { Lucia } from 'lucia';
import { NodePostgresAdapter } from '@lucia-auth/adapter-postgresql';
import pg from 'pg';

const sql = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT)
});

const adapter = new NodePostgresAdapter(sql, {
  user: 'users',
  session: 'user_sessions'
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production'
    }
  }
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof Lucia;
    UserId: number;
  }
}

export const createSession = async (userId: number) => {
  try {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (error) {
    console.log(error);
  }
}

export const verifyAuth = async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return {
      user: null,
      session: null
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null
    };
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }

    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch { }

  return result;
}

export const destroySession = async () => {
  const { session } = await verifyAuth();

  if (!session) {
    return {
      error: 'Unauthorize!',
    }
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}