import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import Banner from "../../../../../../public/static/images/general/user-banner.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MoneyIcon from "../../../../../../public/static/images/general/money-icon.png";

const UserTransactionsDrawer = () => {
  return (
    <SheetContent className="rounded-tl-2xl rounded-bl-2xl p-4">
      <div className="flex flex-col h-full justify-between">
        <div className="flex-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <SheetHeader>
            <div className={`w-full h-[100px] relative bg-white mb-6`}>
              <img
                src={Banner}
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[100%]">
                <Avatar className="bg-white w-20 h-20 p-1">
                  <AvatarImage
                    src="https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg"
                    alt="avatar"
                    className="rounded-full"
                  />
                  <AvatarFallback className="rounded-full">I</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <SheetTitle className="text-zinc-900 font-bold">
                Eduardo Meneses
              </SheetTitle>

              <span className="text-gray-600 mb-2">@jpreis</span>

              <Badge className="bg-red-100 text-red-500 hover:bg-red-100 font-medium">
                Mago da posse de bola %
              </Badge>
            </div>
          </SheetHeader>

          <SheetDescription className="grid grid-cols-2 gap-8 w-full mt-10 px-4">
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Tipo de conta
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Gratuita
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Valor do deposito
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                R$ 100,00
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Valor recebido
              </h2>
              <h2 className="text-green-600 text-[12px] font-bold overflow-hidden text-ellipsis text-nowrap">
                R$ 15,00
              </h2>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap ">
                Valor Gateway
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                R$ 5,00
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Liga depositada
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Liga da amizade
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Data
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                20/01/2024 13:15hrs
              </span>
            </div>
            <div className="flex gap-2 items-center col-span-2">
              <img src={MoneyIcon} alt="money origin" className="w-6 h-6" />
              <h2 className="text-zinc-900 text-[16px] font-bold overflow-hidden text-ellipsis text-nowrap">
                Origem
              </h2>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Nome
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Cody Fisher
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                CPF
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                369.771.830-47
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Instituição
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Nubank SA
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Agência
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                0001
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Conta
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                92210377-5
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Tipo de conta
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Conta corrente
              </span>
            </div>
          </SheetDescription>
        </div>

        <SheetFooter className="text-black grid items-center grid-cols-2 mt-6 gap-2">
          <SheetClose asChild>
            <Button variant={"destructive"}>Banir</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant={"outline"}
              className="text-red-600 border-none hover:bg-red-200/50 hover:text-red-600"
            >
              Voltar
            </Button>
          </SheetClose>
        </SheetFooter>
      </div>
    </SheetContent>
  );
};

export default UserTransactionsDrawer;
