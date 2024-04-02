import { useLocation } from "react-router-dom";
import { Routes } from "../navbar/routes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BR from "../../../public/static/images/flags/BR.png";
import { useState } from "react";

const PageHeader = () => {
  const location = useLocation().pathname.split("/")[1];

  const [lenguage, setLenguage] = useState("portuguese");
  const [period, setPeriod] = useState("today");

  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-2 laptop:gap-0">
      <h1 className="text-black font-semibold text-3xl">
        {Routes.filter((route) => route.pathname === `${location}`)[0].label}
      </h1>

      <div className="flex items-center gap-2">
        <Select onValueChange={setLenguage} defaultValue={lenguage}>
          <SelectTrigger className="w-[150px] text-[#1C1C1C] border-gray-300 border-[1px] outline-none [&>span]:flex [&>span]:items-center [&>span]:gap-2">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Linguagem</SelectLabel>
              <SelectItem
                value="portuguese"
                className="[&>span]:flex [&>span]:items-center [&>span]:gap-2"
              >
                Português
                <img src={BR} className="w-5" />
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={setPeriod} defaultValue={period}>
          <SelectTrigger className="w-[100px] text-[#1C1C1C] border-gray-300 border-[1px] outline-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Período</SelectLabel>
              <SelectItem value="today">Hoje</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PageHeader;
