import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <Link to="/">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">ImageFinder</span>
          </div>
        </Link>
      </div>
      <button className="flex items-center gap-1 text-white hover:text-gray-300 transition">
        <LuUser className="mb-0.5" />
        Profile
      </button>
    </div>
  );
};

export default TopBarComponent;
