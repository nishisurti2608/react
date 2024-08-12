import { MdKeyboardArrowDown } from "react-icons/md";

const LocationSelector = () => {
  return (
    <div className="flex items-center cursor-pointer ">
      <div className="font-bold  border-black hover:text-orange-500 hover:border-orange-500 border-b-2 text-sm">
        Other
      </div>
      <span className="pl-3  font-normal text-sm text-gray-600 hover:text-gray-400 ">
        Ahmedabad, Gujarat, India
      </span>
      <MdKeyboardArrowDown className="w-6 h-6 text-orange-500" />
    </div>
  );
};

export default LocationSelector;
