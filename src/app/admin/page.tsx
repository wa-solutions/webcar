// import { redirect } from 'next/navigation';

// import { verifyAuth } from '@/services/auth.service';

import './page.module.scss';

export default async function AdminPage() {
  // const result = await verifyAuth();

  // if (!result.user) {
  //   return redirect('/admin/signin');
  // }

  return (
    <>
      <h2>Dashboard</h2>
    </>
  );
}