"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import "@/styles/swiperSlider/sliderArrow.css"
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import SectionHeading from '@/components/common/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';


import artImage from "@/assets/courses/art-of-kallah-teaching-cropped.webp"
import bzchus from "@/assets/courses/BZCHUS-Nashim.webp"
import menopause from "@/assets/courses/menopause-1.webp"
import rabbi from "@/assets/courses/Rabbi-Berman-Child-Abuse-Picture-NOT-explicit.webp"
import ravike from "@/assets/courses/Rivkie-Krause-Course-Picture.webp"
import simply from "@/assets/courses/Simply-Together-For-Men.webp"
import yourRealationship from "@/assets/courses/Your-Realationship-Real-Tools_-Real-Connection.webp"


const products = [
  {
    id: 1,
    name: 'that is a long title for product',
    href: '#',
    imageSrc: artImage,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: bzchus,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: menopause,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: rabbi,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: ravike,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: simply,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: yourRealationship,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }

  // More products...
]

const CoursesSlider = () => {
  return (
    <div className='my-10'>
      <SectionHeading title="Popular Courses" desc="Gain an awareness, Conquer Challenges And Celebrate Success"/>
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          582: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          976: {
            slidesPerView: 5,
            spaceBetween: 12,
          }
        }}
        className="mySwiper w-full "
      >
        {products.map((product) => (
            <SwiperSlide className='text-center text-[18px] bg-white flex justify-center items-center rounded-lg shadow-lg' key={product.id} >
              <div className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group h-32 md:h-28 lg:h-32">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 px-2">
                  <div className='flex group items-center gap-1'>
                    <Avatar className="h-5 w-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className='text-[13px] text-[#666666] capitalize group-hover:text-customColor'>
                      <Link href="/user">apon shekh</Link>
                    </p>
                  </div>
                  <div className='mt-2 pb-2'>
                    <p className="text-[17px] font-[600] text-[#333333] text-start capitalize hover:text-customColor leading-6">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CoursesSlider;



