import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import CountUp from "react-countup";

interface StatisticsInfoCardProps {
  label: string;
  total: number;
  percent: number;
}

const StatisticsInfoCard = ({ label, percent, total }: StatisticsInfoCardProps) => {
  
  const renderIcon = () => {
    if (percent > 0) {
      return <FaArrowTrendUp size={20} className="text-green-500 duration-200 hover:text-zinc-800" />;
    } else if (percent < 0) {
      return <FaArrowTrendDown size={20} className="text-red-500 duration-200 hover:text-zinc-800" />;
    }
  };

  const targetValue = total;

  return (
    <Card className="w-full p-5 bg-white border-gray-300">
      <CardHeader>
        <CardTitle className="text-[#1C1C1C] font-inter font-[400] text-lg transition duration-300 hover:translate-x-2">
          {label}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <CardDescription className="text-[#1C1C1C] font-inter font-semibold text-4xl">
            <CountUp start={0} end={targetValue} duration={1.5} separator="," />
          </CardDescription>
          <div className="flex items-center gap-3">
            <CardDescription className="text-[#1C1C1C] font-inter font-[400] text-xl transition duration-300 hover:-translate-x-2">
              {percent}%
            </CardDescription>
            {renderIcon()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsInfoCard;
