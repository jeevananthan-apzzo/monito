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
import React, { useRef, useState } from "react";
import Image from "next/image";
import monitoLogo from "../../public/logo.svg";
import humanWithPet from "../../public/home_banner_img.png";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { monitoFont } from "./Layout";
import HomeBannerContent from "./HomeBannerContent";
import PrimaryButton from "@/custom components/PrimaryButton";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const Header = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenLogin = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseNavMenu = (url: string = "") => {
    setAnchorElNav(null);
    // if(url !== "") router.push(url);
  };

  const [authState, setAuthState] = useState("email_verify");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // only digits allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let headerClass = "";
  if (router.pathname === "/") {
    headerClass = "monito-header";
  } else if (router.pathname === "/products/[product_id]" && isMobile) {
    headerClass = "d-none";
  }

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
                <PrimaryButton text="Login" onClick={handleOpenLogin} />
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
                <MenuItem
                  href="/"
                  // onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem
                  href="/category"
                  // onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography sx={{ textAlign: "center" }}>Category</Typography>
                </MenuItem>
                <MenuItem
                  href="/about"
                  // onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography sx={{ textAlign: "center" }}>About</Typography>
                </MenuItem>
                <MenuItem
                  href="/contact"
                  // onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography sx={{ textAlign: "center" }}>Contact</Typography>
                </MenuItem>
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
      <Modal
        sx={{ padding: 0 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          direction={"row"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 24,
            p: 0,
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              src={"/authImage.png"}
              style={{
                height: "100%",
                borderRadius: "16px 0 0 16px",
              }}
              alt="auth image"
            />
          </div>
          {/* LOGIN */}
          {authState === "login" && (
            <Box
              sx={{ padding: "21px", width: "50%" }}
              className="login-section"
            >
              <div style={{ textAlign: "end" }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    height: "12px",
                    width: "12px",
                  }}
                >
                  <CloseRoundedIcon sx={{ color: "#757675" }} />
                </IconButton>
              </div>
              <Stack spacing={3} sx={{ padding: "0 30px" }}>
                <Image
                  src={monitoLogo}
                  alt="monito logo"
                  width={115}
                  height={40}
                />
                <div>
                  <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                    Login To Your Account
                  </Typography>
                  <Typography sx={{ mt: "10px", fontSize: "16px" }}>
                    Please enter your email address to continue
                  </Typography>
                </div>
                <FormControl variant="outlined">
                  Email Address
                  <OutlinedInput
                    id="user-email"
                    type="email"
                    placeholder="Enter your email"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    }
                    aria-describedby="user-email"
                    inputProps={{
                      "aria-label": "email",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  Password
                  <OutlinedInput
                    id="user-email"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    aria-describedby="user-password"
                    inputProps={{
                      "aria-label": "password",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <div>
                  <Button
                    variant={"contained"}
                    onClick={() => console.log("Login clicked")}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      fontSize: { xs: "10px", md: "16px" },
                      fontWeight: "bold",
                      textTransform: "none",
                      padding: "10px 29px",
                    }}
                  >
                    Login
                  </Button>
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "12px !important", fontSize: "14px" }}
                >
                  By continuing, I agree to the{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => router.push("/terms-of-use")}
                    sx={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => router.push("/privacy-policy")}
                    sx={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mt: "0 !important",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Don't have an account?{" "}
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => router.push("/Sign up")}
                      sx={{
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </div>
              </Stack>
            </Box>
          )}
          {/* SIGN UP */}
          {authState === "signup" && (
            <Box
              sx={{ padding: "21px", width: "50%" }}
              className="signup-section"
            >
              <div style={{ textAlign: "end" }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    height: "12px",
                    width: "12px",
                  }}
                >
                  <CloseRoundedIcon sx={{ color: "#757675" }} />
                </IconButton>
              </div>
              <Stack spacing={3} sx={{ padding: "0 30px" }}>
                <Image
                  src={monitoLogo}
                  alt="monito logo"
                  width={115}
                  height={40}
                />
                <div>
                  <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                    Registration
                  </Typography>
                  <Typography sx={{ mt: "10px", fontSize: "16px" }}>
                    Please enter your details to complete the registration
                  </Typography>
                </div>
                <FormControl variant="outlined">
                  Name
                  <OutlinedInput
                    id="user-name"
                    type="text"
                    placeholder="Enter your name"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonOutlinedIcon />
                      </InputAdornment>
                    }
                    aria-describedby="user-person"
                    inputProps={{
                      "aria-label": "person",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  Email Address
                  <OutlinedInput
                    id="user-email"
                    type="email"
                    placeholder="Enter your email"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    }
                    aria-describedby="user-email"
                    inputProps={{
                      "aria-label": "email",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  Password
                  <OutlinedInput
                    id="user-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    aria-describedby="user-password"
                    inputProps={{
                      "aria-label": "password",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <FormControl variant="outlined">
                  Confirm Password
                  <OutlinedInput
                    id="user-confirm-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    aria-describedby="user-confirm-password"
                    inputProps={{
                      "aria-label": "confirm password",
                    }}
                    sx={{
                      borderRadius: "8px",
                      "&.Mui-focused .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    }}
                  />
                </FormControl>
                <div>
                  <Button
                    variant={"contained"}
                    onClick={() => console.log("Sign up clicked")}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      fontSize: { xs: "10px", md: "16px" },
                      fontWeight: "bold",
                      textTransform: "none",
                      padding: "10px 29px",
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "12px !important", fontSize: "14px" }}
                >
                  By continuing, I agree to the{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => router.push("/terms-of-use")}
                    sx={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => router.push("/privacy-policy")}
                    sx={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mt: "0 !important",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Already have an account?{" "}
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => router.push("/Login")}
                      sx={{
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                </div>
              </Stack>
            </Box>
          )}
          {/* Email Verify */}
          {authState === "email_verify" && (
            <Box
              sx={{ padding: "21px", height: "50%", width: "50%" }}
              className="email-verify-section"
            >
              <div style={{ textAlign: "end" }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    height: "12px",
                    width: "12px",
                  }}
                >
                  <CloseRoundedIcon sx={{ color: "#757675" }} />
                </IconButton>
              </div>
              <Stack spacing={3} sx={{ padding: "0 30px" }}>
                <Image
                  src={monitoLogo}
                  alt="monito logo"
                  width={115}
                  height={40}
                />
                <div>
                  <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                    Verify your email
                  </Typography>
                  <Typography sx={{ mt: "10px", fontSize: "16px" }}>
                    Please enter 4 digit OTP sent on email address
                  </Typography>
                  <Typography
                    color="warning"
                    sx={{ mt: "10px", fontSize: "16px" }}
                  >
                    <img
                      src="/email_edit.svg"
                      alt="email_edit"
                      style={{ display: "inline" }}
                    />
                    <span>example@email.com</span>
                  </Typography>
                </div>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {otp.map((digit, idx) => (
                    <OutlinedInput
                      key={idx}
                      value={digit}
                      onChange={(e) => handleChange(idx, e.target.value)}
                      onKeyDown={(e) => handleBackspace(idx, e)}
                      inputRef={(el) => (inputsRef.current[idx] = el!)}
                      sx={{
                        width: 60,
                        height: 60,
                        fontSize: "24px",
                        borderRadius: "8px",
                        boxShadow: "0px 3px 16px 0px #0000001A",
                        backgroundColor: digit ? "#C7E5FA" : "transparent",
                        transition: "background-color 0.2s",
                        "& .MuiOutlinedInput-input": {
                          padding: 0,
                        },
                        "& .MuiInputBase-input": {
                          textAlign: "center",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  ))}
                </Box>

                <Button
                  variant={"contained"}
                  onClick={() => console.log("Login clicked")}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    fontSize: { xs: "10px", md: "16px" },
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "10px 29px",
                  }}
                >
                  Verify
                </Button>

                <Stack direction={"row"} justifyContent={"space-between"} >
                  <Typography
                    color="textSecondary"
                    sx={{ fontSize: "14px" }}
                    
                  >
                    Didn't get OTP
                  </Typography>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => console.log("Resend OTP")}
                    sx={{
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Resend OTP
                  </Link>
                </Stack>
                <div style={{ textAlign: "center" }}>
                  <Button
                    variant="text"
                    sx={{
                      fontSize: { xs: "10px", md: "16px" },
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                    startIcon={<ArrowBackIosNewRoundedIcon sx={{height: "14px",}} />}
                  >
                    Return to Login
                  </Button>
                </div>
              </Stack>
            </Box>
          )}
        </Stack>
      </Modal>
    </header>
  );
};

export default Header;
