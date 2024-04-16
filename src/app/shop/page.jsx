import ProductGrid from "@/components/pages/shop/productGrid/ProductGrid";
import Sidebar from "@/components/pages/shop/sidebar/Sidebar";

const Shop = () => {
  return (
    <div className="w-full flex">
      <ProductGrid />
      <Sidebar />
    </div>
  );
};

export default Shop;
