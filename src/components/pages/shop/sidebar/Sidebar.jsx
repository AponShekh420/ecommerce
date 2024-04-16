import Catagorys from "./Catagorys";
import Filter from "./Filter";

const Sidebar = () => {
  return (
    <div className="w-3/12 md:inline-block hidden px-3">
      <Catagorys />
      <Filter />
    </div>
  );
};

export default Sidebar;
