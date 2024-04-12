import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BsEye } from "react-icons/bs";
import { MdBlockFlipped } from "react-icons/md";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ImCheckmark } from "react-icons/im";
import { TbCurrencyDollarOff } from "react-icons/tb";
import UserTransactionsDrawer from "../user-transections-drawer";

const UserCard = () => {
  const [checkedUser, setCheckedUser] = useState(false);

  const randomNumber = Math.floor(Math.random() * 100);

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
              src="https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg"
              alt="avatar"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        Eduardo
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        @nickname
      </h2>
      {randomNumber % 2 === 0 ? (
        <Badge className="bg-green-200/35 rounded-lg hover:bg-green-200/35 cursor-default">
          <ImCheckmark className="text-[#05A660] mr-2" />
          <span className="font-semibold text-[12px] text-[#05A660] overflow-hidden text-ellipsis text-nowrap">
            Depositado
          </span>
        </Badge>
      ) : (
        <Badge className="bg-orange-200/35 rounded-lg hover:bg-orange-200/35 cursor-default justify-center">
          <TbCurrencyDollarOff fontSize={17} className="text-[#FF6F06] mr-2" />
          <span className="font-semibold text-[12px] text-[#FF6F06] overflow-hidden text-ellipsis text-nowrap">
            Sacado
          </span>
        </Badge>
      )}

      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        R$ 300,00
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
      18/09/2016
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

          <Button
            className="bg-transparent hover:bg-transparent"
            variant="secondary"
            size="icon"
          >
            <MdBlockFlipped className="text-red-600" size={25} />
          </Button>
        </div>

        <UserTransactionsDrawer />
      </Sheet>
    </div>
  );
};

export default UserCard;
