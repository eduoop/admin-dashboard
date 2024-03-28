import Juninho from "../../../../../public/static/images/general/juninho.png";
import Round from "../../../../../public/static/images/general/round.png";
import Scalation from "../../../../../public/static/images/general/scalation.png";

const SigningCard = () => {
  return (
    <div className="hidden laptop:flex w-[43%] h-full bg-gradient-to-b from-[#f74948] to-[#f74849] rounded-lg relative items-end justify-center max-w-[550px]">
      <img src={Juninho} className="absolute w-[44vh] top-5 left-[-32px]" />
      <img src={Scalation} className="absolute w-[24vh] top-14 left-[25vh]" />
      <img src={Round} className="absolute w-[24vh] top-[28vh] right-[100px]" />

      <div className="w-[80%] flex flex-col items-center justify-center pb-9">
        <h1 className="font-manrope font-extrabold text-[25px] mb-3">
          Sistema de gestão
        </h1>
        <p className="font-manrope font-medium text-[11px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default SigningCard;
