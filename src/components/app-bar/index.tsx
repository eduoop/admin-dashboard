import { Navbar } from "../navbar";
import DrawerMenu from "./drawer-menu";

const AppBar = () => {
  return (
    <div>
      <Navbar.Desktop />
      <DrawerMenu />
    </div>
  );
};

export default AppBar;
