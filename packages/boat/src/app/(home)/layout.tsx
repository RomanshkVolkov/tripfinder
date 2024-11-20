import TransparentHeader from '@/components/header/transparent';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';

export default function HomeLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <TransparentHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
