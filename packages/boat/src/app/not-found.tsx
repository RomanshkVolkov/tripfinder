import NotFoundError from '@/components/errors/not-found-error';
import NotFoundHeader from '@/components/header/not-found';

export default function Custom404() {
  return (
    <>
      <NotFoundHeader />
      <NotFoundError />
    </>
  );
}
