import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IoEyeOutline } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";
import DeleteBannerPopup from "../delete-banner-popup";
import BannerInfosPopup from "../banner-infos-popup";

const BannerCard = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img
          className="w-40 h-40 object-cover"
          src="https://t2.tudocdn.net/660810?w=1920&h=1440"
          alt="Banner"
        />

        <div>
          <h1 className="font-semibold font-inter text-2xl overflow-hidden text-ellipsis text-nowrap">
            Banner Campanha Champions{" "}
          </h1>
          <p className="text-gray-600 font-inter text-[17px]">
            Publicado em 24/01/2024
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size={"icon"} className="rounded-full">
              <IoEyeOutline size={23} />
            </Button>
          </DialogTrigger>
          <BannerInfosPopup />
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              size={"icon"}
              className="rounded-full"
            >
              <LuTrash2 size={23} />
            </Button>
          </AlertDialogTrigger>
          <DeleteBannerPopup />
        </AlertDialog>
      </div>
    </div>
  );
};

export default BannerCard;
