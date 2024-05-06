import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover";
import LoggedUserPopup from "../logged-user-popup";

const LoggedUser = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 duration-200 hover:bg-gray-100 hover:opacity-80 cursor-pointer">
          <Avatar>
            <AvatarImage
              src="https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg"
              alt="avatar"
            />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>

          <p className="font-[400] text-black text-[16px] overflow-hidden text-ellipsis text-nowrap">
            Eduardo
          </p>
        </div>
      </PopoverTrigger>

      <LoggedUserPopup/> 
    </Popover>
  );
};

export default LoggedUser;
