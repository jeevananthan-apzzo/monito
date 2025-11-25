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
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import monitoLogo from "../../public/logo.svg";
import humanWithPet from "../../public/home_banner_img.png";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  ListItemIcon,
  Modal,
  OutlinedInput,
  Stack,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { monitoFont } from "./Layout";
import HomeBannerContent from "./HomeBannerContent";
import PrimaryButton from "@/custom components/PrimaryButton";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Logout from "@mui/icons-material/LogoutOutlined";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import OtpVerify from "./OtpVerify";

const Header = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState<
    "" | { username: ""; token: "" }
  >("");
  console.log(isLoggedIn);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpenLogin = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseNavMenu = (url: string = "") => {
    setAnchorElNav(null);
  };

  const [authState, setAuthState] = useState("login");

  const [anchorProfile, setAnchorProfile] = useState<null | HTMLElement>(null);
  const openProfileMenu = Boolean(anchorProfile);
  const handleClickProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorProfile(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorProfile(null);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let headerClass = "";
  if (router.pathname === "/") {
    headerClass = "monito-header";
  } else if (router.pathname === "/products/[product_id]" && isMobile) {
    headerClass = "d-none";
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setLoggedIn(!!user.token);
    if (user) setUserDetails(user);
  }, [loading]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const capitalizeFirst = (str: string): string =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

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
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#002a48",
                      textTransform: "none",
                    }}
                    href="/"
                    // onClick={() => router.push(page.url)}
                  >
                    Home
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#002a48",
                      textTransform: "none",
                    }}
                    href="/category"
                    // onClick={() => router.push(page.url)}
                  >
                    Category
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#002a48",
                      textTransform: "none",
                    }}
                    href="/about"
                    // onClick={() => router.push(page.url)}
                  >
                    About
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#002a48",
                      textTransform: "none",
                    }}
                    href="/contact"
                    // onClick={() => router.push(page.url)}
                  >
                    Contact
                  </Button>
                </Stack>
                <Box>
                  {isLoggedIn ? (
                    <>
                      <Button
                        onClick={handleClickProfileMenu}
                        size="small"
                        sx={{ textTransform: "none" }}
                        aria-controls={
                          openProfileMenu ? "account-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={openProfileMenu ? "true" : undefined}
                        startIcon={
                          <Avatar
                            src="/person_filled.svg"
                            sx={{ width: 32, height: 32 }}
                          />
                        }
                        endIcon={
                          <ExpandMoreRoundedIcon
                            style={{
                              rotate: openProfileMenu ? "180deg" : "0deg",
                            }}
                          />
                        }
                      >
                        {userDetails && capitalizeFirst(userDetails.username)}
                      </Button>
                      <Button
                        size="large"
                        aria-label="add to cart"
                        aria-controls="cart-appbar"
                        aria-haspopup="true"
                        sx={{ textTransform: "none" }}
                        startIcon={
                          <Image
                            src="/cart_icon.svg"
                            alt="add to cart"
                            width={24}
                            height={24}
                          />
                        }
                      >
                        Cart
                      </Button>
                      <Menu
                        anchorEl={anchorProfile}
                        id="profile-menu"
                        open={openProfileMenu}
                        onClose={handleProfileClose}
                        onClick={handleProfileClose}
                        keepMounted
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem
                          onClick={handleProfileClose}
                          sx={{ fontWeight: "bold" }}
                        >
                          Hello User
                        </MenuItem>
                        <Divider />

                        <MenuItem onClick={() => router.push("/account")}>
                          <Avatar
                            sx={{
                              width: "16px",
                              height: "16px",
                              bgcolor: "transparent",
                            }}
                          >
                            <img
                              src="/person_outlined.svg"
                              alt="person_outlined"
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain", // or "cover"
                              }}
                            />
                          </Avatar>{" "}
                          My Profile
                        </MenuItem>
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{ marginTop: "0" }}
                        />
                        <MenuItem onClick={() => router.push("/account/myorders")}>
                          <Avatar
                            sx={{
                              width: "16px",
                              height: "16px",
                              bgcolor: "transparent",
                            }}
                          >
                            <img
                              src="/shop_bag.svg"
                              alt="shop"
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain", // or "cover"
                              }}
                            />
                          </Avatar>{" "}
                          My Orders
                        </MenuItem>
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{ marginTop: "0" }}
                        />

                        <MenuItem onClick={() => router.push("/account/wishlist")}>
                          <Avatar
                            sx={{
                              width: "16px",
                              height: "16px",
                              bgcolor: "transparent",
                            }}
                          >
                            <img
                              src="/wishlist.svg"
                              alt="wishlist"
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain", // or "cover"
                              }}
                            />
                          </Avatar>
                          Wishlist
                        </MenuItem>
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{ marginTop: "0" }}
                        />

                        <MenuItem onClick={() => router.push("/account/addresses")}>
                          <Avatar
                            sx={{
                              width: "16px",
                              height: "16px",
                              bgcolor: "transparent",
                            }}
                          >
                            <img
                              src="/location_pin.svg"
                              alt="location_pin"
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain", // or "cover"
                              }}
                            />
                          </Avatar>
                          Saved Addresses
                        </MenuItem>
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{ marginTop: "0" }}
                        />

                        <MenuItem onClick={() => router.push("/account/notifications")}>
                          <Avatar
                            sx={{
                              width: "16px",
                              height: "16px",
                              bgcolor: "transparent",
                            }}
                          >
                            <img
                              src="/notify_bell.svg"
                              alt="notify_bell"
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain", // or "cover"
                              }}
                            />
                          </Avatar>
                          Notifications
                        </MenuItem>
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{ marginTop: "0" }}
                        />

                        <MenuItem
                          onClick={handleLogout}
                          sx={{ color: "#EB001B" }}
                        >
                          <ListItemIcon
                            sx={{
                              color: "#EB001B",
                              width: "16px",
                              height: "16px",
                            }}
                          >
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <PrimaryButton text="Login" onClick={handleOpenLogin} />
                  )}
                </Box>
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
                onClose={() => handleCloseNavMenu()}
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
                onClick={() => handleCloseNavMenu()}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem href="/">
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem href="/category">
                  <Typography sx={{ textAlign: "center" }}>Category</Typography>
                </MenuItem>
                <MenuItem href="/about">
                  <Typography sx={{ textAlign: "center" }}>About</Typography>
                </MenuItem>
                <MenuItem href="/contact">
                  <Typography sx={{ textAlign: "center" }}>Contact</Typography>
                </MenuItem>
                <MenuItem href="/account">
                  <Typography sx={{ textAlign: "center" }}>
                    My Profile
                  </Typography>
                </MenuItem>
                <MenuItem href="/account/myorders">
                  <Typography sx={{ textAlign: "center" }}>
                    My Orders
                  </Typography>
                </MenuItem>
                <MenuItem href="/account/wishlist">
                  <Typography sx={{ textAlign: "center" }}>Wishlist</Typography>
                </MenuItem>
                <MenuItem href="/account/addresses">
                  <Typography sx={{ textAlign: "center" }}>
                    Saved Addresses
                  </Typography>
                </MenuItem>
                <MenuItem href="/account/notifications">
                  <Typography sx={{ textAlign: "center" }}>
                    Notifications
                  </Typography>
                </MenuItem>
                {isLoggedIn ? (
                  <MenuItem onClick={handleLogout} sx={{ color: "#EB001B" }}>
                    <ListItemIcon
                      sx={{
                        color: "#EB001B",
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem sx={{ textAlign: "center" }}>
                    {" "}
                    <PrimaryButton text="Login" onClick={handleOpenLogin} />
                  </MenuItem>
                )}
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
                <Image
                  src="/cart_icon.svg"
                  alt="add to cart"
                  width={24}
                  height={24}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="xl"
        sx={{
          display: headerClass === "" ? "none" : "block",
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
            aspectRatio: isMobile ? "5/4" : "1/1",
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

      <Modal
        sx={{ padding: 0 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "100%", md: "980px", lg: "1200px" },
            height: { xs: "100%", md: "fit-content" },
            overflow: { xs: "auto", md: "none" },
            bgcolor: "background.paper",
            borderRadius: { md: "16px" },
            boxShadow: 24,
            p: 0,
          }}
        >
          <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" } }}>
            <IconButton
              aria-label="back button"
              onClick={handleClose}
              sx={{
                display: {md: "none"},
                position: "absolute",
                zIndex: 2,
                left: "23px",
                top: "21px",
                height: "7px",
                width: "7px",
              }}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
            <img
              src={"/authImage.png"}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: !isMobile ? "16px 0 0 16px" : "",
              }}
              alt="auth image"
            />
          </Box>
          {/* LOGIN */}
          {authState === "login" && (
            <LoginUser
              loading={loading}
              setLoading={setLoading}
              handleClose={handleClose}
              handleMouseDownPassword={handleMouseDownPassword}
              handleMouseUpPassword={handleMouseUpPassword}
              setAuthState={() => setAuthState("signup")}
            />
          )}
          {/* SIGN UP */}
          {authState === "signup" && (
            <RegisterUser
              loading={loading}
              setLoading={setLoading}
              handleClose={handleClose}
              handleMouseDownPassword={handleMouseDownPassword}
              handleMouseUpPassword={handleMouseUpPassword}
              setAuthState={setAuthState}
            />
          )}
          {/* Email Verify */}
          {authState === "otp_verify" && (
            <OtpVerify handleClose={handleClose} setAuthState={setAuthState} />
          )}
        </Stack>
      </Modal>
    </header>
  );
};

export default Header;
