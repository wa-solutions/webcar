import './client.css';

import { Header } from './components/header/header.component';

export const metadata = {
  title: 'Webcar Dealer',
  description: 'The best car dealer from Palmeira Village'
};

export default function ClientRootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}