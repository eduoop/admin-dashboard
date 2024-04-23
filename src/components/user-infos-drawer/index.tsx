import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import Banner from "../../../public/static/images/general/user-banner.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const UserInfosDrawer = () => {
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
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Tipo de conta</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Gratuita</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Data de criação</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">14/01/2024</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Time do Coração</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Vasco</span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Lyon</span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Man city</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap ">Campeonatos</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Brasileirão</span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Premier League</span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">Ligue One</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Ligas</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Brasileirão 23/24
              </span>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Premier League 23/24
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Total depositado</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">R$ 1.124,00</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">E-mail</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">email@email.com</span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">Localização</h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                Rio de Janeiro - RJ
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

export default UserInfosDrawer;
