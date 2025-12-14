import Footer from '@/app/components/Footer/Footer';
import Header from '@/components/commons/navigations/Header/Header';
import '../globals.css';
import '../custom-shadcn.css';
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
