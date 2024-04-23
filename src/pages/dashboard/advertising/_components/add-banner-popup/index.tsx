import { ChangeEvent, useState } from "react";
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateBannerForm, CreateBannerSchemaForm } from "./schema";
import { UploadBannerImage } from "../upload-banner-image";
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
import { Button } from "@/components/ui/button";
interface AddBannerPopupProps {
  setOpen: (open: boolean) => void;
}

const AddBannerPopup = ({ setOpen }: AddBannerPopupProps) => {
  const [imageBase64, setImageBase64] = useState<string>("");

  const form = useForm<CreateBannerForm>({
    mode: "onSubmit",
    resolver: zodResolver(CreateBannerSchemaForm),
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (!file) return;

    form.setValue("image", file);

    const reader = new FileReader();

    reader.addEventListener("loadend", () =>
      setImageBase64(reader.result as string)
    );

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (
    formData: z.infer<typeof CreateBannerSchemaForm>
  ) => {
    console.log(formData);
    
    form.reset();
    form.setValue("name", ""); // Limpar o campo "name"
    form.setValue("comments", ""); // Limpar o campo "comments"

    setImageBase64("");
    setOpen(false);
  };

  return (
    <AlertDialogContent className="px-8 rounded-2xl max-w-[800px] bg-white block">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col md:flex-row gap-8 w-full h-full">
            <div className="flex flex-col gap-2">
              <UploadBannerImage
                onChange={handleImageChange}
                image={imageBase64}
              />

              {form.formState.errors.image && (
                <p className="text-sm font-medium text-destructive">
                  {form.formState.errors.image.message}
                </p>
              )}
            </div>

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
                        className="bg-[#F9F9F9] text-zinc-900 border-none w-full"
                        id="name"
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
                        className="bg-[#F9F9F9] text-zinc-900 border-none w-full min-h-[100px] h-full"
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
          <div className="flex items-center gap-3 mt-5 justify-end">
            <AlertDialogCancel className="border-none text-red-500 hover:bg-red-500/10 hover:text-red-500 w-[200px] ">
              Voltar
            </AlertDialogCancel>
            <Button variant="default" className="w-[200px]">
              Adicionar
            </Button>
          </div>
        </form>
      </Form>
    </AlertDialogContent>
  );
};

export default AddBannerPopup;
