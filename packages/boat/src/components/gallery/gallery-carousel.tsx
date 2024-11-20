'use client';

import { vendorData } from 'public/data/listing-details';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import {
  Swiper,
  SwiperSlide,
  EffectFade,
  Navigation,
} from '@/components/ui/slider';
import { useGallery } from '@/components/gallery/context';
import ActionIcon from '@/components/ui/action-icon';
import { fromOpacity } from '@/config/constants';
import Button from '@/components/ui/button';

interface GalleryCarouselTypes {
  initialSlide?: number;
}

export default function GalleryCarousel({
  initialSlide,
}: GalleryCarouselTypes) {
  const { closeGallery } = useGallery();
  const [state, setState] = useState(initialSlide);

  return (
    <AnimatePresence>
      <motion.div
        initial={fromOpacity().from}
        animate={fromOpacity().to}
        exit={fromOpacity().from}
        className="h-full w-full bg-black"
      >
        <div className="ml-auto flex w-1/2 items-center justify-between px-4 py-5 md:pl-0 md:pr-8 2xl:py-8">
          <div className="-translate-x-1/2 font-semibold text-white xl:text-xl">
            {state ? state + 1 : 1}/{vendorData.gallery.length}
          </div>
          <Button
            variant="outline"
            onClick={closeGallery}
            className="text-white hover:bg-gray-lighter hover:text-gray-dark"
          >
            <XMarkIcon className="mr-2 h-auto w-4" />
            Close
          </Button>
        </div>
        <div className="-mt-20 grid h-full w-full grid-cols-1 items-center gap-0 md:grid-cols-[1fr_5fr_1fr] md:px-8 3xl:grid-cols-[1fr_4fr_1fr]">
          <div className="hidden md:flex">
            <ActionIcon
              size="xl"
              variant="outline"
              rounded="full"
              className="gallery-left !border-gray-lighter text-white !ring-0 hover:bg-gray-lighter hover:text-gray-dark"
            >
              <ChevronLeftIcon className="h-auto w-4" />
            </ActionIcon>
          </div>
          <Swiper
            slidesPerView={1}
            effect="fade"
            speed={600}
            initialSlide={initialSlide}
            modules={[EffectFade, Navigation]}
            onSlideChange={({ realIndex }) => setState(realIndex)}
            navigation={{
              nextEl: '.gallery-right',
              prevEl: '.gallery-left',
            }}
            className="w-full"
          >
            {vendorData.gallery.map((item) => (
              <SwiperSlide key={item}>
                <div className="relative h-[300px] w-full bg-white py-2 md:h-[400px] lg:h-[500px] 3xl:h-[650px]">
                  <Image
                    src={item}
                    alt={item}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden justify-end md:flex">
            <ActionIcon
              size="xl"
              variant="outline"
              rounded="full"
              className="gallery-right !border-gray-lighter text-white !ring-0 hover:bg-gray-lighter hover:text-gray-dark"
            >
              <ChevronRightIcon className="h-auto w-4" />
            </ActionIcon>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
