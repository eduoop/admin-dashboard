import SigningForm from "./_components/form";
import SigningCard from "./_components/signing-card";

export function Signin() {
  return (
    <div className="w-screen h-screen p-7 flex items-center justify-between">
      <SigningForm defaultValues={{
        email: "",
        password: "",
      }} />

      <SigningCard />
    </div>
  );
}
