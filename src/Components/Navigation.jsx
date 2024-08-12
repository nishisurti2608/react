import { GoBriefcase } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="flex list-none gap-10 border border-black ml-auto font-semibold text-gray-500 text-md ">
      <li className="cursor-pointer hover:text-orange-600 flex">
        <GoBriefcase className="w-6 h-6 mr-2" />
        Swiggy Corporate
      </li>

      <li className="cursor-pointer hover:text-orange-600 flex">
        <IoSearchOutline className="w-6 h-6 mr-2" />
        Search
      </li>

      <li className="cursor-pointer hover:text-orange-600 flex">
        <RiDiscountPercentLine className="w-6 h-6 mr-2" />
        Offers
      </li>

      <li className="cursor-pointer hover:text-orange-600 flex">
        <IoHelpBuoyOutline className="w-6 h-6 mr-2" />
        Help
      </li>

      <li className="cursor-pointer hover:text-orange-600 flex">
        <FiUser className="w-6 h-6 mr-2" />
        Sign In
      </li>

      <li className="cursor-pointer hover:text-orange-600 flex">
        <BsBag className="w-6 h-6 mr-2" />
        Cart
      </li>
    </nav>
  );
};

export default Navigation;
