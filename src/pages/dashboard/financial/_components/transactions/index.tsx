import ContentCard from "@/components/content-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ImSearch } from "react-icons/im";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { PiExportBold } from "react-icons/pi";
import { Checkbox } from "@/components/ui/checkbox";
import UserCard from "../user-card";
import Pagination from "@/components/Pagination";

const Transitions = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [checkedAllUsers, setCheckedAllUsers] = useState(false);

  return (
    <ContentCard>
      <CardHeader className="flex mb-6 tablet:mb-0 p-0 tablet:p-6 gap-5 laptop:gap-10 laptop:mb-0">
        <CardTitle className="font-inter text-2xl font-semibold text-zinc-900">
          Histórico de depósitos e saques
        </CardTitle>

        <div className="flex flex-col gap-4 tablet:gap-0 tablet:flex-row items-start tablet:items-center justify-between">
          <div className="flex w-full tablet:w-auto flex-col items-start tablet:flex-row tablet:items-center gap-4">
            <div className="relative w-full">
              <Input
                type={"text"}
                className={`rounded-lg text-sm focus:border-gray-600 border-gray-200 text-gray-800 bg-white pl-11 font-medium font-manrope`}
                placeholder="Pesquise por palavra chave"
              />
              <div className="absolute left-4 top-[50%] translate-y-[-50%] cursor-pointer">
                <ImSearch className="text-zinc-900" size={16} />
              </div>
            </div>

            <div className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    name="date"
                    variant={"outline"}
                    className={`w-fit border-gray-200 pl-3 font-manrope text-left text-gray-800 font-medium hover:bg-white hover:text-[#94A3B8] justify-start bg-white ${
                      !date && "text-muted-foreground text-[#94A3B8]"
                    }
                    `}
                  >
                    <CalendarIcon className="mr-4 h-4 w-4 text-gray-800" />
                    {date ? (
                      format(date, "dd/MM/yyyy")
                    ) : (
                      <span>Filtrar por mês / ano</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button
            variant={"outline"}
            className="gap-2 border-gray-200 font-manrope"
          >
            <PiExportBold size={20} />
            Exportar
          </Button>
        </div>
      </CardHeader>

      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <CardContent className="w-[1000px] tablet:w-full px-0 tablet:px-6 pb-0">
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
              Status
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Valor
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Data
            </h2>
            <h2 className="font-inter font-semibold overflow-hidden text-ellipsis text-nowrap text-[15px]">
              Ação
            </h2>
          </div>

          <div className="flex flex-col w-full gap-4 mb-4">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>

          <Pagination />
        </CardContent>
      </div>
    </ContentCard>
  );
};

export default Transitions;
