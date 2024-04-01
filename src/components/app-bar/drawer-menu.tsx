import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Navbar } from "../navbar";
import { useState } from "react";

const DrawerMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full laptop:hidden bg-white border-b-[1px] border-[#1C1C1C1A] border-solid py-2 pr-2 flex items-center justify-end">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="secondary" size={"icon"}>
            <MenuIcon size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent className="bg-white p-0 flex flex-col text-black">
          <SheetHeader className="text-left border-b border-solid border-secondary p-5 mb-6 flex-2">
            <SheetTitle className="text-black">Menu</SheetTitle>
          </SheetHeader>

          <div className="flex-1">
            <Navbar.Mobile setOpen={setOpen}/>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DrawerMenu;
