import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BsEye } from "react-icons/bs";
import { MdBlockFlipped } from "react-icons/md";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import LeagueInfosDrawer from "../league-infos-drawer.tsx";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import BlockLeaguePopup from "@/components/block-league-popup/index.tsx";

const LeagueCard = () => {
  const [checkedUser, setCheckedUser] = useState(false);

  return (
    <div className="grid grid-cols-6 grid-rows-1 gap-4 w-full border-gray-200 border-solid border py-3 px-4 rounded-md items-center">
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
              src="https://static.vecteezy.com/ti/vetor-gratis/p3/18932192-avatar-de-um-personagem-de-jogadores-de-futebol-gratis-vetor.jpg"
              alt="avatar"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        Liga da Amizade
      </h2>
      <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
        @nickname
      </h2>

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
            <BlockLeaguePopup/>
          </AlertDialog>
        </div>

        <LeagueInfosDrawer />
      </Sheet>
    </div>
  );
};

export default LeagueCard;
