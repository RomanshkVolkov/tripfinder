'use client';

import { useTimeout } from '@/hooks/use-timeout';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Autoplay,
} from '@/components/ui/slider';
import TestimonialCard from '@/components/ui/cards/testimonial';
import BlockLoader from '@/components/ui/loader/block-loader';
import { testimonials } from 'public/data/testimonials';
import ActionIcon from '@/components/ui/action-icon';
import Section from '@/components/ui/section';

export default function TestimonialBlock() {
  const { state } = useTimeout();

  return (
    <Section
      className="group/section lg:container-fluid mt-12 overflow-hidden pl-4 sm:pl-6 lg:mt-16"
      title="Testimonial"
      description="Unsatiable it considered invitation he travelling insensible."
      headerClassName="items-end mb-4 lg:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && (
        <div className="testimonial relative">
          <Swiper
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={true}
            slidesPerView={4}
            spaceBetween={12}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 1.6,
              },
              580: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {testimonials?.map((item, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <TestimonialCard
                  name={item.name}
                  description={item.description}
                  location={item.location}
                  rating={item.rating}
                  className="mb-1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ActionIcon
            rounded="full"
            color="invert"
            className="testimonial-button-prev invisible absolute left-[25px] top-1/2 z-10 hidden -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 md:flex lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </ActionIcon>
          <ActionIcon
            rounded="full"
            color="invert"
            className="testimonial-button-next invisible absolute right-[25px] top-1/2 z-10 hidden -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-[10px] md:flex lg:group-hover/section:-right-[19px]"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </ActionIcon>
        </div>
      )}
    </Section>
  );
}
