import { Route } from "@/models";
import { Dispatch } from "react";
import { NavLink } from "react-router-dom";

interface LinkButtonProps {
  route: Route;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const LinkButton = ({ route, setOpen }: LinkButtonProps) => {
  const currentLinkStyle =
    "flex items-center font-[400] text-black text-[16px] gap-2 bg-gray-200 p-2 rounded-xl";
  const linkStyle =
    "flex items-center font-[400] text-black text-[16px] gap-2 p-2 rounded-xl duration-200 hover:bg-gray-100 hover:opacity-80";

  return (
    <NavLink
      className={({ isActive }) => (isActive ? currentLinkStyle : linkStyle)}
      onClick={() => setOpen(false)}
      to={route.pathname}
    >
      {route.icon && <route.icon size={26} />}
      {route.label}
    </NavLink>
  );
};

export default LinkButton;
