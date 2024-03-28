import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Campo obrigatório.",
    })
    .trim()
    .min(1, "Campo obrigatório.")
    .email("Email inválido."),

  password: z
    .string({
      required_error: "Digite a sua senha.",
    })
    .min(6, "O campo precisa ter mais de 5 caracters."),
});

interface FormProps {
  defaultValues: z.infer<typeof formSchema>;
}

const SigningForm = ({ defaultValues }: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full laptop:w-1/2 flex justify-center">
      <div className="w-full laptop:w-[60%] max-w-[500px]">
        <div className="flex flex-col items-center mb-11 ">
          <h1 className="text-gray-900 font-bold text-3xl mb-4">Login</h1>
          <p className="text-gray-400 font-[400] text-center">
            Acesse sua conta fornecendo suas <br /> credenciais de acesso.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full mb-4">
                  <FormControl>
                    <Input
                      className={`rounded-[4px] text-sm font-[400] font-inter border-gray-300 focus:border-gray-600 text-gray-300 focus:text-gray-600 ${
                        field.value.trim() && "border-gray-600 text-gray-600"
                      }`}
                      placeholder="emailexample@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="relative mb-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className={`rounded-[4px] text-sm font-[400] font-inter border-gray-300 focus:border-gray-600 text-gray-300 focus:text-gray-600 ${
                            field.value.trim() &&
                            "border-gray-600 text-gray-600"
                          }`}
                          placeholder="Digite sua senha"
                          {...field}
                        />
                        <div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">
                          {showPassword ? (
                            <IoEyeSharp
                              className="text-gray-300"
                              size={22}
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <IoEyeOffSharp
                              className="text-gray-300"
                              size={22}
                              onClick={() => setShowPassword(true)}
                            />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center w-full mb-14">
              <div className="flex items-center space-x-2">
                <Checkbox
                  className={`rounded-full
                ${rememberMe ? "border-green-600" : "border-gray-500"}`}
                  id="keep-logged-in"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked.valueOf() as boolean)
                  }
                />

                <label
                  htmlFor="keep-logged-in"
                  className="text-sm
                 font-[600]
                 leading-none
                 text-gray-600
                 peer-disabled:cursor-not-allowed
                 peer-disabled:opacity-70"
                >
                  Relembre-me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-primary font-semibold"
              >
                Esqueceu a senha
              </Link>
            </div>

            <Button className="w-full" variant="default">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SigningForm;
