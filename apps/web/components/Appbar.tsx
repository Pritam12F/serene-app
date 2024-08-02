import { Button } from "./ui/button";

export const Appbar = () => {
  return (
    <div className="flex justify-between px-5 bg-customPurple py-3">
      <div className="text-slate-200">Hamburger menu</div>
      <div className="space-x-5">
        <Button variant={"secondary"}>Join now</Button>
        <Button variant={"secondary"}>Sign in</Button>
      </div>
    </div>
  );
};
