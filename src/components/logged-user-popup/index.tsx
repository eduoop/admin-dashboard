import { PopoverContent } from "@/components/ui/popover";
import { Button } from "../ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function LoggedUserPopup() {
  return (
    <PopoverContent className="w-[150px] flex flex-col gap-2">
      <Link to="/" className="w-full">
        <Button className="gap-3 bg-gray-200 text-zinc-900 text-sm h-[35px] hover:bg-gray-100/70 w-full">
          <HiOutlineUserCircle size={22} /> Perfil
        </Button>
      </Link>

      <Link to="/" className="w-full">
        <Button className="gap-3 font-normal text-sm h-[35px] w-full">
          <IoLogOutOutline size={22} /> Sair
        </Button>
      </Link>
    </PopoverContent>
  );
}

export default LoggedUserPopup;
