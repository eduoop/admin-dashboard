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
import { User } from "@/models/user.model";

interface UserInfosDrawerProps {
  user?: User;
}

const UserInfosDrawer = ({ user }: UserInfosDrawerProps) => {
  const userData = user || {
    name: "Eduardo Meneses",
    username: "@jpreis",
    bolaPercentage: 75,
    accountType: "Gratuita",
    creationDate: "14/01/2024",
    favoriteTeams: ["Vasco", "Lyon", "Man City"],
    leagues: ["Brasileirão 23/24", "Premier League 23/24"],
    championships: ["Brasileirão", "Premier League", "Ligue One"],
    totalDeposited: 1124.0,
    email: "email@email.com",
    location: "Rio de Janeiro - RJ",
    avatar:
      "https://i.pinimg.com/280x280_RS/3a/66/f8/3a66f807ecd9a390077624a2fcf002ea.jpg",
  };

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
                    src={userData.avatar}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <AvatarFallback className="rounded-full">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <SheetTitle className="text-zinc-900 font-bold">
                {userData.name}
              </SheetTitle>

              <span className="text-gray-600 mb-2">{userData.username}</span>

              <Badge className="bg-red-100 text-red-500 hover:bg-red-100 font-medium">
                Mago da posse de bola {userData.bolaPercentage}%
              </Badge>
            </div>
          </SheetHeader>

          <SheetDescription className="grid grid-cols-2 gap-8 w-full mt-10 px-4">
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Tipo de conta
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                {userData.accountType}
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Data de criação
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                {userData.creationDate}
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Time do Coração
              </h2>
              {userData.favoriteTeams.map((team, index) => (
                <span
                  key={index}
                  className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap"
                >
                  {team}
                </span>
              ))}
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap ">
                Campeonatos
              </h2>
              {userData.championships.map((championship, index) => (
                <span
                  key={index}
                  className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap"
                >
                  {championship}
                </span>
              ))}
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Ligas
              </h2>
              {userData.leagues.map((league, index) => (
                <span
                  key={index}
                  className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap"
                >
                  {league}
                </span>
              ))}
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Total depositado
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                R$ {userData.totalDeposited}
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                E-mail
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                {userData.email}
              </span>
            </div>
            <div>
              <h2 className="text-zinc-900 font-bold overflow-hidden text-ellipsis text-nowrap">
                Localização
              </h2>
              <span className="text-gray-600 mt-2 block overflow-hidden text-ellipsis text-nowrap">
                {userData.location}
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
