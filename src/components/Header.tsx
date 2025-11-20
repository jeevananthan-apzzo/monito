import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import React from "react";
import Image from "next/image";
import monitoLogo from "../../public/logo.svg";
import humanWithPet from "../../public/home_banner_img.png";
import { Grid, Stack } from "@mui/material";
import { monitoFont } from "./Layout";
import HomeBannerContent from "./HomeBannerContent";
import PrimaryButton from "@/custom components/PrimaryButton";
import { useRouter } from "next/router";

export const navItems = ["Home", "Category", "About", "Contact"];

const Header = () => {

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerClass = router.pathname !== "/products" ? "monito-header" : "";
  

  return (
    <header className={headerClass}>
      <AppBar
        position="static"
        component="nav"
        sx={{
          height: "100px",
          justifyContent: "center",
          bgcolor: "transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              direction={"row"}
              sx={{
                minWidth: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Image
                src={monitoLogo}
                alt="monito logo"
                width={115}
                height={40}
              />

              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Stack direction="row" spacing={3}>
                  {navItems.map((item) => (
                    <Button
                      variant="text"
                      key={item}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#002a48",
                        textTransform: "none",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Stack>
                <PrimaryButton text="Login" />
              </Box>
            </Stack>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                  justifyContent: "space-between",
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {navItems.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Image
                src={monitoLogo}
                alt="monito logo"
                width={115}
                height={40}
              />
              <IconButton
                size="large"
                aria-label="add to cart"
                aria-controls="cart-appbar"
                aria-haspopup="true"
              >
                <Image  src="/cart_icon.svg" alt="add to cart" width={24} height={24}/>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="xl"
        sx={{
          display: (headerClass === "") ? "none" : "block",
          height: "100%",
          position: "relative",
        }}
      >
        <HomeBannerContent />
        <div
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            position: "absolute",
            bottom: "0",
            right: "0",
            aspectRatio: "1/1",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/home_banner_img.png"
            alt="pet with human"
            width={690}
            height={940}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
