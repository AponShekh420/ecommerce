import BottomHeader from "./bottom/BottomHeader";
import MainHeader from "./main/MainHeader";
import TopHeader from "./top/TopHeader";

const Header = () => {
  return (
    <nav className="w-full">
      <TopHeader/>
      <MainHeader/>
      <BottomHeader/>
    </nav>
  );
}

export default Header;