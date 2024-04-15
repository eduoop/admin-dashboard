import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { MdBlockFlipped } from "react-icons/md";

const BlockLeaguePopup = () => {
  return (
    <AlertDialogContent className="px-2 max-w-[400px] rounded-2xl">
      <AlertDialogHeader className="flex justify-center items-center">
        <MdBlockFlipped size={80} className="text-red-500 mb-6" />
        <AlertDialogTitle className="font-semibold text-black text-2xl">
          Banir liga?
        </AlertDialogTitle>
        <AlertDialogDescription className="font-inter text-[#5E5E5E] text-center">
          Tem certeza que deseja banir permanentemente esta liga? Você poderá
          des-banila quando quiser
        </AlertDialogDescription>
        <AlertDialogDescription className="font-inter text-[#5E5E5E] text-center">
          Enviaremos uma mensagem padrão para o usuário informando sobre o
          banimento da liga.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="mt-3">
        <AlertDialogCancel className="border-none text-red-500 hover:bg-red-500/10 hover:text-red-500 w-full tablet:w-1/2 h-14 ">
          Voltar
        </AlertDialogCancel>
        <AlertDialogAction className="w-full tablet:w-1/2 h-14">
          Banir
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default BlockLeaguePopup;
