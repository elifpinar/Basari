import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <ListItem component="a" href={href || "#"} target={href ? "_blank" : "_self"}>
    <ListItemButton>
      <ListItemText primary={children} />
    </ListItemButton>
  </ListItem>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <AppBar position="fixed" sx={{ top: 0, zIndex: 1300, backgroundColor: isScrolling ? "white" : "transparent", boxShadow: isScrolling ? 3 : 0 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: isScrolling ? "text.primary" : "white" }}>
          BAŞARI YAZICI SERVİSİ
        </Typography>

        <List sx={{ display: { xs: "none", lg: "flex" }, flexDirection: "row", gap: 3 }}>
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem href="https://www.material-tailwind.com/docs/react/installation">Docs</NavItem>
        </List>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton color={isScrolling ? "default" : "inherit"}>
            <i className="fa-brands fa-twitter" />
=======
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          BAŞARI TEKNİK 
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
>>>>>>> parent of 299d80c (s)
          </IconButton>
          <IconButton color={isScrolling ? "default" : "inherit"}>
            <i className="fa-brands fa-facebook" />
          </IconButton>
          <IconButton color={isScrolling ? "default" : "inherit"}>
            <i className="fa-brands fa-instagram" />
          </IconButton>
<<<<<<< HEAD
          <Button color={isScrolling ? "inherit" : "primary"} size="small" href="#footer">
  İletişim
</Button>

=======
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Blocks
            </Button>
          </a>
>>>>>>> parent of 299d80c (s)
        </div>

        <IconButton
          edge="end"
          color={isScrolling ? "default" : "inherit"}
          onClick={handleOpen}
          sx={{ display: { xs: "block", lg: "none" }, ml: 2 }}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
<<<<<<< HEAD
      </Toolbar>

      <Collapse in={open} sx={{ backgroundColor: "white", p: 2 }}>
        <List>
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem href="https://www.material-tailwind.com/docs/react/installation">Docs</NavItem>
          <NavItem href="#footer">İletişim</NavItem>
        </List>
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <IconButton color="default">
            <i className="fa-brands fa-twitter" />
          </IconButton>
          <IconButton color="default">
            <i className="fa-brands fa-facebook" />
          </IconButton>
          <IconButton color="default">
            <i className="fa-brands fa-instagram" />
          </IconButton>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color="success" size="small">
              Blocks
            </Button>
          </a>
=======
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
            <NavItem href="https://www.material-tailwind.com/blocks">
              Blocks
            </NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Blocks
              </Button>
            </a>
          </div>
>>>>>>> parent of 299d80c (s)
        </div>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;
