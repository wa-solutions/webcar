import './admin.scss';
// import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { Sidebar } from './components/sidebar/sidebar.component';

export const metadata = {
  title: 'WebCar Admin',
  description: 'WebCar administrator panel'
};

export default function AdminRootLayout({children}: Readonly<{children: React.ReactNode }>) {
  return (
    <div className="main-admin">
      <Sidebar />
      <div className="content">
        <Header />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}