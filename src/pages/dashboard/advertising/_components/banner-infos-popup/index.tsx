import { AlertDialogContent } from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateBannerForm, CreateBannerSchemaForm } from "./schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const data = [
  {
    name: "Vizualizações",
    value: 36230,
  },
  {
    name: "Cliques",
    value: 23267,
  },
];

const BannerInfosPopup = () => {
  const width = useWindowWidth();
  const bannerImage =
    "https://editorial.uefa.com/resources/028b-1a67f9d7cdb4-b36f0920a6d0-1000/uefa_champions_league_final_2023_24_host_city_trophy_shoot.jpeg";

  const form = useForm<CreateBannerForm>({
    mode: "onSubmit",
    resolver: zodResolver(CreateBannerSchemaForm),
  });

  useEffect(() => {
    form.setValue("name", "Campanha Champions");
    form.setValue("comments", "Publicado em 24/01/2024");
  }, []);

  const handleSubmit = async (
    formData: z.infer<typeof CreateBannerSchemaForm>
  ) => {
    console.log(formData);
  };

  const dataWithFill = data.map((item) => ({
    ...item,
    fill: item.name === "Vizualizações" ? "#F74948" : "#0D5DBC",
  }));

  return (
    <AlertDialogContent className="px-8 rounded-2xl max-w-[800px] bg-white block max-h-[80vh] overflow-y-scroll">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col md:flex-row gap-8 w-full h-full">
            <img
              src={bannerImage}
              className="w-[100px] h-[100px] tablet:w-[300px] tablet:h-[330px] rounded-xl object-cover"
            />

            <div className="w-full flex flex-col gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full flex-2">
                    <label
                      className="text-zinc-900 font-semibold"
                      htmlFor="name"
                    >
                      Nome
                    </label>
                    <FormControl>
                      <Input
                        className="bg-[#F9F9F9] text-zinc-900 border-none w-full disabled:cursor-default disabled:opacity-100"
                        id="name"
                        disabled
                        placeholder="Nome do banner"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem className="w-full flex-1 flex flex-col h-full">
                    <label
                      className="text-zinc-900 font-semibold"
                      htmlFor="comments"
                    >
                      Comentários
                    </label>
                    <FormControl>
                      <Textarea
                        disabled
                        className="bg-[#F9F9F9] text-zinc-900 border-none w-full min-h-[100px] h-full disabled:cursor-default disabled:opacity-100"
                        id="comments"
                        placeholder="Comentário do banner"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      <div className="w-full flex justify-center">
        <div className="bg-[#F9F9F9] w-full max-w-[600px] p-6 rounded-lg mt-5">
          <h1 className="text-zinc-900 font-semibold mb-4">Desempenho</h1>
          <ResponsiveContainer width={"100%"} height={200}>
            <BarChart
              data={dataWithFill}
              height={200}
              margin={{
                top: 5,
                bottom: 5,
              }}
            >
              <XAxis
                domain={["auto", "auto"]}
                tickLine={false}
                tickMargin={8}
                style={{ fontSize: ".875rem", fill: "#7d7d7d", fontWeight: "600" }}
                dataKey="name"
                axisLine={{ stroke: "#cdcdcd", strokeWidth: 1 }} 
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickCount={4}
                tickFormatter={(value) =>
                  value !== 0 && value >= 1000 ? `${value}` : `${value}`
                }
                tick={{
                  fontSize: width < 640 ? 15 : 14,
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              />
              {/* {data.map((item) =>
                item.cliques ? (
                  <Bar
                    radius={[8, 8, 8, 8]}
                    barSize={30}
                    dataKey="cliques"
                    fill="#0D5DBC"
                    activeBar={<Rectangle fill="#0D5DBC" stroke="#0D5DBC" />}
                  />
                ) : (
                  <Bar
                    radius={[8, 8, 8, 8]}
                    barSize={30}
                    dataKey="vizualizações"
                    fill="#F74948"
                    activeBar={<Rectangle fill="#F74948" stroke="#F74948" />}
                  />
                )
              )} */}
              <Bar
                radius={[8, 8, 8, 8]}
                barSize={30}
                dataKey="value"
                fill="#0D5DBC"
                activeBar={<Rectangle fill="#0D5DBC" stroke="#0D5DBC" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AlertDialogContent>
  );
};

export default BannerInfosPopup;
