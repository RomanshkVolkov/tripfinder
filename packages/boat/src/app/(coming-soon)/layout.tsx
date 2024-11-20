import Footer from '@/components/footer/footer';
import NotFoundHeader from '@/components/header/not-found';

export default function Commingsoon({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <NotFoundHeader />
      <main className="flex-grow">{children}</main>
    </>
  );
}
