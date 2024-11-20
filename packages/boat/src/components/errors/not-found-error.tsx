import Image from 'next/image';

export default function NotFoundError() {
  return (
    <div className="fixed inset-0">
      <Image
        src="/images/not-found.svg"
        alt="not found"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
