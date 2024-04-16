import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];
const UpcomingCourses = () => {
  return (
    <div>
      <SectionHeading title="Upcoming Courses" />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 md:h-36 h-44 xl:h-52 lg:h-48">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              width={100}
              height={100}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex px-2 pt-2">
            <div className="pr-2 text-[50px] font-[600] text-[#ffb606] border-r-2 p-0 leading-none flex items-center">
              <h3>30</h3>
            </div>
            <div className="flex items-center pl-2 text-[16px] font-[600]">
              <p>January – February 20 10:30 am</p>
            </div>
          </div>
          <div className="p-2">
            <div className="text-[20px] text-customColor">
              <p>Welcoming Space</p>
            </div>
            <div className="text-[#270034] text-sm">
              <p>Sara Rivka Lax</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 md:h-36 h-44 xl:h-52 lg:h-48">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              width={100}
              height={100}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex px-2 pt-2">
            <div className="pr-2 text-[50px] font-[600] text-[#ffb606] border-r-2 p-0 leading-none flex items-center">
              <h3>30</h3>
            </div>
            <div className="flex items-center pl-2 text-[16px] font-[600]">
              <p>January – February 20 10:30 am</p>
            </div>
          </div>
          <div className="p-2">
            <div className="text-[20px] text-customColor">
              <p>Welcoming Space</p>
            </div>
            <div className="text-[#270034] text-sm">
              <p>Sara Rivka Lax</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 md:h-36 h-44 xl:h-52 lg:h-48">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              width={100}
              height={100}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="flex px-2 pt-2">
            <div className="pr-2 text-[50px] font-[600] text-[#ffb606] border-r-2 p-0 leading-none flex items-center">
              <h3>30</h3>
            </div>
            <div className="flex items-center pl-2 text-[16px] font-[600]">
              <p>January – February 20 10:30 am</p>
            </div>
          </div>
          <div className="p-2">
            <div className="text-[20px] text-customColor">
              <p>Welcoming Space</p>
            </div>
            <div className="text-[#270034] text-sm">
              <p>Sara Rivka Lax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourses;
