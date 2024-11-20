import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '@/components/ui/button';

interface RevealContentTypes {
  defaultHeight: number;
  className?: string;
  buttonText?: string;
}

export default function RevealContent({
  children,
  defaultHeight,
  buttonText,
  className,
}: React.PropsWithChildren<RevealContentTypes>) {
  let [showContent, setShowContent] = useState(false);
  let revealEl = useRef<HTMLDivElement>(null!);
  let revealChildEl = useRef<HTMLDivElement>(null!);

  function handleRevealContent() {
    if (revealEl.current.scrollHeight > defaultHeight) {
      // set timeout need to show btn feedback
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  }

  useEffect(() => {
    if (revealChildEl.current.clientHeight <= defaultHeight) {
      setShowContent(true);
    }
  }, [setShowContent, defaultHeight]);

  return (
    <div className={className}>
      <div
        ref={revealEl}
        style={{ height: !showContent ? `${defaultHeight}px` : 'auto' }}
        className={clsx(!showContent && 'overflow-hidden')}
      >
        <div ref={revealChildEl}>{children}</div>
      </div>
      {!showContent && (
        <div className="before:content-[' '] relative from-white pt-3 before:absolute before:-top-6 before:block before:h-6 before:w-full before:bg-gradient-to-t">
          <Button
            variant="text"
            className="relative !p-0 !font-bold leading-6 text-gray-dark hover:text-gray-dark/70 focus:!ring-0"
            onClick={() => handleRevealContent()}
          >
            {buttonText}
            <span className="absolute bottom-0 left-0 block w-full border-t border-gray md:border"></span>
          </Button>
        </div>
      )}
    </div>
  );
}
