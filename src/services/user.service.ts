import { User } from '@/domain/entities/User';
import { UserModel, CreateUserProps } from '@/domain/models/UserModel';

import db from '@/lib/db';

export const createUser = async (data: CreateUserProps): Promise<User | undefined> => {
  try {
    const [user] = await db<UserModel>('users').insert(data, '*');

    return user;
  } catch { }
}

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const user = await db<UserModel>('users')
      .first()
      .where('email', email);

    return user;
  } catch { }
}