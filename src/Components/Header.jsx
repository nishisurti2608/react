import Logo from "./Logo";
import LocationSelector from "./LocationSlector";

const Header = () => {
  return (
    <header className="p-6 shadow-xl bg-white">
      <div className="max-w-7xl mx-auto border border-black flex items-center">
        <div className="w-24 border border-blue">
          <Logo />
        </div>
        <div>
          <LocationSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
