import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import MobileNav from '@/components/ui/mobile-nav';

export default function UserLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
