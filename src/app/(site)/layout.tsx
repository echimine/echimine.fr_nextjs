import Footer from '@/app/components/Footer/Footer';
import Header from '@/components/commons/navigations/Header/Header';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
