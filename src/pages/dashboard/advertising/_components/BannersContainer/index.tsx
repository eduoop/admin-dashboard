import ContentCard from "@/components/content-card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import BannerCard from "../BannerCard";

const BannersContainer = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <ContentCard>
      <CardHeader className="flex mb-6 tablet:mb-0 p-0 tablet:p-6 gap-5 laptop:gap-10 laptop:mb-0">
        <CardTitle className="font-inter text-2xl font-semibold text-zinc-900">
          Banners
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
            variant={"default"}
            className="font-semibold text-[15px] h-12"
          >
            Adicionar Banner
          </Button>
        </div>
      </CardHeader>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-col gap-4 mb-4 w-[700px] tablet:w-full">
          <BannerCard />
        </div>
      </div>
    </ContentCard>
  );
};

export default BannersContainer;
