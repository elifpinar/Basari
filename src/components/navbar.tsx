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
          </IconButton>
          <IconButton color={isScrolling ? "default" : "inherit"}>
            <i className="fa-brands fa-facebook" />
          </IconButton>
          <IconButton color={isScrolling ? "default" : "inherit"}>
            <i className="fa-brands fa-instagram" />
          </IconButton>
          <Button color={isScrolling ? "inherit" : "primary"} size="small" href="#footer">
  İletişim
</Button>

        </div>

        <IconButton
          edge="end"
          color={isScrolling ? "default" : "inherit"}
          onClick={handleOpen}
          sx={{ display: { xs: "block", lg: "none" }, ml: 2 }}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
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
        </div>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;
