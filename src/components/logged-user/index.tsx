import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LoggedUser = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage
          src="https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg"
          alt="avatar"
        />
        <AvatarFallback>V</AvatarFallback>
      </Avatar>

      <p className="font-[400] text-black text-[16px] overflow-hidden text-ellipsis text-nowrap">Juninho</p>
    </div>
  );
};

export default LoggedUser;
