import ContentCard from "@/components/content-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface CustomTooltipData {
  name: string;
  value: number;
  unit: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: CustomTooltipData[];
}

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Fev",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Jun",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Jul",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Ago",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Set",
    uv: 3490,
    pv: 4300,
  },
];

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (!active || !payload) {
    return null;
  }

  // const formattedValue = payload[0].value > 1000 ? formatNumber(payload[0].value) : payload[0].value;

  const formattedValue = (value: number) => {
    if (value > 1000) {
      return formatNumber(value);
    } else {
      return value;
    }
  };

  return (
    <div className="custom-tooltip">
      <h2 className="font-inter font-[400] text-4xl">{`${formattedValue(
        payload[0].value
      )}`}</h2>
      <h2 className="font-inter font-[400] text-4xl text-[#f67e7e]">{`${formattedValue(
        payload[1].value
      )}`}</h2>
    </div>
  );
};

const formatNumber = (value: number) => {
  return value.toLocaleString("en-US", { minimumFractionDigits: 0 });
};

const TotalUsersChart = () => {
  const width = useWindowWidth();

  return (
    <ContentCard>
      <CardHeader className="flex laptop:flex-row laptop:items-center gap-5 laptop:gap-10 mb-3 laptop:mb-0">
        <CardTitle className="font-inter text-2xl font-semibold text-zinc-900">
          Total de usuários
        </CardTitle>

        <div className="h-5 bg-gray-400 w-[2px] mt-0 hidden laptop:block" />

        <div className="flex items-center gap-3 laptop:gap-7 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-900" />
            <h2 className="font-inter text-lg font-[400] text-zinc-900">
              Esse ano
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <h2 className="font-inter text-lg font-[400] text-zinc-900">
              Ano Passado
            </h2>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-0 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="w-[650px] tablet:w-full">
          <ResponsiveContainer width={"100%"} height={350}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <YAxis
                padding={{ bottom: 45 }}
                axisLine={false}
                tickLine={false}
                tickCount={4}
                tickFormatter={(value) =>
                  value !== 0 && value >= 1000 ? `${value}K` : `${value}`
                }
                tick={{
                  fontSize: width < 640 ? 15 : 18,
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              />
              <XAxis
                padding={{ left: 35 }}
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: width < 640 ? 15 : 18,
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              />
              {/* <Tooltip contentStyle={{ backgroundColor: "transparent", border: "none" }}/> */}
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="pv" stroke="#1C1C1C" dot={false} />
              <Line
                type="monotone"
                dataKey="uv"
                dot={false}
                stroke="#f67e7e"
                strokeDasharray="5 5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </ContentCard>
  );
};

export default TotalUsersChart;
