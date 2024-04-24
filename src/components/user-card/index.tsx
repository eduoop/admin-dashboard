import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { BsEye } from "react-icons/bs";
import { MdBlockFlipped } from "react-icons/md";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import UserInfosDrawer from "../user-infos-drawer";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import DeleteUserPopup from "../delete-user-popup";
import { User } from "@/models/user.model";

interface UserCardProps {
  user?: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const [checkedUser, setCheckedUser] = useState(false);

  return (
    <div className="grid grid-cols-7 grid-rows-1 gap-4 w-full border-gray-200 border-solid border py-3 px-4 rounded-md items-center">
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="recent users"
            className={`${
              checkedUser ? "border-green-600" : "border-gray-700"
            }`}
            checked={checkedUser}
            onCheckedChange={(checked) =>
              setCheckedUser(checked.valueOf() as boolean)
            }
          />

          <Avatar className="w-10 h-10">
            <AvatarImage
              src={user ? user.avatar : "https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg"}
              alt="avatar"
            />
            <AvatarFallback>{user ? user.name.split("")[0] : "E"}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        {user ? user.name : "Eduardo"}
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        {user ? user.username : "Eduop"}
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[12px]">
        {user ? user.email : "eduardo@gmail.com"}
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        {user ? user.creationDate : "01/01/2020"}
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        {user ? user.accountType : "Premium"}
      </h2>
      <Sheet>
        <div className="flex items-center">
          <SheetTrigger asChild>
            <Button
              className="bg-transparent hover:bg-transparent"
              variant="secondary"
              size="icon"
            >
              <BsEye className="text-gray-600" size={25} />
            </Button>
          </SheetTrigger>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="bg-transparent hover:bg-transparent"
                variant="secondary"
                size="icon"
              >
                <MdBlockFlipped className="text-red-600" size={25} />
              </Button>
            </AlertDialogTrigger>
            <DeleteUserPopup />
          </AlertDialog>
        </div>

        <UserInfosDrawer user={user}/>
      </Sheet>
    </div>
  );
};

export default UserCard;
