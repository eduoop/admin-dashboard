import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import LeagueBanner from "../../../../../../public/static/images/general/league-banner.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LeagueInfosDrawer = () => {
  return (
    <SheetContent className="rounded-tl-2xl rounded-bl-2xl p-4">
      <div className="flex flex-col h-full justify-between">
        <div className="flex-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <SheetHeader>
            <img src={LeagueBanner} alt="league banner" className="w-full" />
            <SheetTitle className="text-zinc-900 font-bold text-xl text-center">
              Liga da amizade
            </SheetTitle>
          </SheetHeader>

          <Separator className="mt-3 bg-[#E5E7EB]" />

          <SheetDescription className="grid grid-cols-2 gap-8 w-full mt-6 px-4">
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Número de Jogadores
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                26 Jogadores
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Valor da Liga
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                R$ 300,00
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Criador
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                @epena
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap ">
                Data de Criação
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                20/01/2024 13:15hrs
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Modo
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Legends
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Rodada
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                2 de 40
              </span>
            </div>
            <div className="col-span-2">
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Administradores
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                @epena
              </span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                @rededwards
              </span>
            </div>
          </SheetDescription>
        </div>

        <SheetFooter className="text-black grid items-center grid-cols-2 mt-6 gap-2">
          <Button variant={"outline"}>Voltar</Button>
          <Button variant={"destructive"}>Banir</Button>
        </SheetFooter>
      </div>
    </SheetContent>
  );
};

export default LeagueInfosDrawer;
