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

import {
  Alert,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  Snackbar,
  SnackbarCloseReason,
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

interface LoginProps {
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  setAuthState: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginUser = ({
  handleClose,
  setAuthState,
  loading,
  setLoading,
  handleMouseDownPassword,
  handleMouseUpPassword,
}: LoginProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();

  const [snackError, setSnackError] = useState(false);
  const [snackSuccess, setSnackSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleErrorClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setError("");
    setSnackError(false);
  };
  const handleSuccessClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setMsg("");
    setSnackSuccess(false);
  };

  const handleLoginClose = () => {
    setUsername("");
    setPassword("");
    handleClose();
  };

  const handleLogin = async () => {
    setError("");
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        setSnackError(true);
        return;
      }

      setMsg("Login Completed Successfully!");
      setSnackSuccess(true);
      // API returns token
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username, token: data.token })
      );
      setTimeout(() => {
        handleClose();
        router.push("/");
      }, 1000);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      setSnackError(true);
    }

    setLoading(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: { md: "21px" },
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
      className="login-section"
    >
      <div style={{ textAlign: "end" }}>
        <IconButton
          aria-label="close"
          onClick={handleLoginClose}
          sx={{
            display: {xs: "none", md: "inline-flex"},
            height: "12px",
            width: "12px",
          }}
        >
          <CloseRoundedIcon sx={{ color: "#757675" }} />
        </IconButton>
      </div>
      <Stack
        spacing={{ xs: 0.99, md: 4 }}
        sx={{ padding: {xs: "10px", md: "0 30px"}, height: "100%" }}
      >
        <Image
          src={monitoLogo}
          style={{ margin: "0 auto" }}
          alt="monito logo"
          width={115}
          height={40}
        />
        <div>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Login To Your Account
          </Typography>
          <Typography
            sx={{
              mt: { xs: "10px", md: "7px" },
              fontSize: { xs: "12px", md: "16px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Please enter your email address to continue
          </Typography>
        </div>
        <FormControl variant="outlined" size={isMobile ? "small" : "medium"}>
          Email Address
          <OutlinedInput
            id="user-email"
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <FormControl variant="outlined" size={isMobile ? "small" : "medium"}>
          Password
          <OutlinedInput
            id="user-email"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
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
            onClick={handleLogin}
            sx={{
              marginTop: {xs: ".5rem", md: ""},
              width: "100%",
              borderRadius: "8px",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "bold",
              textTransform: "none",
              padding: "10px 29px",
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Login"}
          </Button>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mt: "12px !important", fontSize: {xs: "12px", md: "14px"}, textAlign: "center" }}
          
        >
          By continuing, I agree to the{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push("/terms-of-use")}
            sx={{
              textDecoration: "none",
              fontSize: {xs: "12px", md: "14px"},
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
              fontSize: {xs: "12px", md: "14px"},
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
              onClick={setAuthState}
              sx={{
                textDecoration: "none",
                fontSize: {xs: "12px", md: "14px"},
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </div>
      </Stack>
      <Snackbar
        open={snackError}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleErrorClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar
        open={snackSuccess}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleSuccessClose}
      >
        <Alert severity="success">{msg}</Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginUser;
