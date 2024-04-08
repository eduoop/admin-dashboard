import ContentCard from "@/components/content-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import UserCard from "@/components/user-card";
import { useState } from "react";

const RecentUsersTable = () => {
  const [checkedAllUsers, setCheckedAllUsers] = useState(false);

  return (
    <ContentCard>
      <CardHeader>
        <CardTitle className="font-inter text-2xl font-semibold text-zinc-900">
          Usuários Recentes
        </CardTitle>
      </CardHeader>

      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <CardContent className="w-[1000px] tablet:w-full ">
          <div className="grid grid-cols-7 grid-rows-1 gap-4 w-full bg-gray-100 py-3 px-4 rounded-md border-gray-200 border-solid border mb-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="recent users"
                  className={`${
                    checkedAllUsers ? "border-green-600" : "border-gray-700"
                  }`}
                  checked={checkedAllUsers}
                  onCheckedChange={(checked) =>
                    setCheckedAllUsers(checked.valueOf() as boolean)
                  }
                />
                <label
                  htmlFor="recent users"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]"
                >
                  Foto
                </label>
              </div>
            </div>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Nome
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Nickname
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              E-mail
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Data de Criação
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Tipo de conta
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Ação
            </h2>
          </div>

          <div className="flex flex-col w-full gap-4">
            <UserCard />
            <UserCard />
          </div>
        </CardContent>
      </div>
    </ContentCard>
  );
};

export default RecentUsersTable;
