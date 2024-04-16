"use client";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "@/styles/swiperSlider/singleProductSlider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/Image/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative flex w-full items-center overflow-hidden px-4 pb-8 pt-14  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-7 lg:gap-x-8">
        <div className="h-[600px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[800px] aspect-w-2 overflow-hidden rounded-lg bg-white col-span-4">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            zoom={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Zoom, FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <Image
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt={product.imageAlt}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2"
          >
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://swiperjs.com/demos/images/nature-10.jpg"
                alt={product.imageAlt}
                className="object-cover object-center"
                width={100}
                height={100}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.name}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-customColor hover:text-indigo-500"
                >
                  {product.reviewCount} reviews
                </a>
              </div>
            </div>
          </section>
          {/* product description */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>

          <section aria-labelledby="options-heading">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <form>
              {/* Colors */}
              <div>
                <h4 className="text-sm font-medium text-gray-900">Color</h4>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">Size</h4>
                  <a
                    href="#"
                    className="text-sm font-medium text-customColor hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-customColor" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-customColor"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-customColor px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-customColor focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
