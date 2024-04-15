"use client"

import SectionHeading from "@/components/common/SectionHeading";
import { LuQuote } from "react-icons/lu";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import "@/styles/swiperSlider/sliderArrow.css"
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";


const Testimonials = () => {
  return (
    <div>
      <SectionHeading title="Testimonials" desc="HEAR WHAT REAL PEOPLE SAY ABOUT OHEL MIRIAM"/>
      <Swiper
        slidesPerView={3}
        spaceBetween={7}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        
        className="mySwiper w-full"
      >
        <SwiperSlide className='bg-white rounded-lg shadow-lg' >
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="flex justify-center">
                <LuQuote className="text-center text-5xl text-customColor"/>
              </div>
              <figure className="mt-10">
                <blockquote className="text-center text-gray-500 sm:text-2xl sm:leading-9">
                  <p className="text-sm leading-[28.8px]">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                  width={100}
                  height={100}
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="auth"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg shadow-lg' >
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="flex justify-center">
                <LuQuote className="text-center text-5xl text-customColor"/>
              </div>
              <figure className="mt-10">
                <blockquote className="text-center text-gray-500 sm:text-2xl sm:leading-9">
                  <p className="text-sm leading-[28.8px]">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                  width={100}
                  height={100}
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="auth"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg shadow-lg' >
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="flex justify-center">
                <LuQuote className="text-center text-5xl text-customColor"/>
              </div>
              <figure className="mt-10">
                <blockquote className="text-center text-gray-500 sm:text-2xl sm:leading-9">
                  <p className="text-sm leading-[28.8px]">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                  width={100}
                  height={100}
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="auth"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg shadow-lg' >
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <div className="flex justify-center">
                <LuQuote className="text-center text-5xl text-customColor"/>
              </div>
              <figure className="mt-10">
                <blockquote className="text-center text-gray-500 sm:text-2xl sm:leading-9">
                  <p className="text-sm leading-[28.8px]">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                  width={100}
                  height={100}
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="auth"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Judith Black</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;