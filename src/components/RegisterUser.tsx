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

interface RegisterProps {
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterUser = ({
  loading,
  setLoading,
  handleClose,
  setAuthState,
  handleMouseDownPassword,
  handleMouseUpPassword,
}: RegisterProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [confirmShowPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [snackError, setSnackError] = useState(false);
  const [snackSuccess, setSnackSuccess] = useState(false);

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

  const handleSignupClose = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    handleClose();
  };

  const handleSignup = async () => {
    if (password && confirmPassword && password === confirmPassword) {
      setError("");
      setMsg("");
      setLoading(true);

      try {
        const res = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password: confirmPassword,
          }),
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          setError(data.message || "Registration failed");
          setLoading(false);
          setSnackError(true);
          return;
        }

        setMsg("Registration Completed Successfully!");
        setSnackSuccess(true);
        // API returns token
        localStorage.setItem(
          "user",
          JSON.stringify({ username: username, userId: data.id, token: "sign up login" })
        );
        setTimeout(() => {
          setAuthState("otp_verify");
        }, 1000);
      } catch (err) {
        console.log(err);
        const errorMessage =
          err instanceof Error ? err.message : "Something went wrong";
        setError(errorMessage);
        setSnackError(true);
      }

      setLoading(false);
    } else {
      setSnackError(true);
      setError("Password mismatch Please check the password!");
    }
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
      className="signup-section"
    >
      <div style={{ textAlign: "end" }}>
        <IconButton
          aria-label="close"
          onClick={handleSignupClose}
          sx={{
            display: { xs: "none", md: "inline-flex" },
            height: "12px",
            width: "12px",
          }}
        >
          <CloseRoundedIcon sx={{ color: "#757675" }} />
        </IconButton>
      </div>
      <Stack
        spacing={{ xs: 0.99, md: 3 }}
        sx={{ padding: { xs: "10px", md: "0 30px" }, height: "100%" }}
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
            Registration
          </Typography>
          <Typography
            sx={{
              mt: { xs: "10px", md: "7px" },
              fontSize: { xs: "12px", md: "16px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Please enter your details to complete the registration
          </Typography>
        </div>
        <FormControl variant="outlined" size={isMobile ? "small" : "medium"}>
          Name
          <OutlinedInput
            id="user-name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
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
        <FormControl variant="outlined" size={isMobile ? "small" : "medium"}>
          Email Address
          <OutlinedInput
            id="user-email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
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
            id="user-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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
        <FormControl variant="outlined" size={isMobile ? "small" : "medium"}>
          Confirm Password
          <OutlinedInput
            id="user-confirm-password"
            type={confirmShowPassword ? "text" : "password"}
            placeholder="Re enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    confirmShowPassword
                      ? "hide the password"
                      : "display the password"
                  }
                  onClick={handleClickConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
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
            onClick={handleSignup}
            sx={{
              marginTop: { xs: ".5rem", md: "" },
              width: "100%",
              borderRadius: "8px",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "bold",
              textTransform: "none",
              padding: "10px 29px",
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Sign Up"}
          </Button>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mt: "12px !important",
            fontSize: { xs: "10px", md: "14px" },
            textAlign: "center",
          }}
        >
          By continuing, I agree to the{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push("/terms-of-use")}
            sx={{
              textDecoration: "none",
              fontSize: { xs: "12px", md: "14px" },
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
              fontSize: { xs: "12px", md: "14px" },
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
              onClick={() => setAuthState("login")}
              sx={{
                textDecoration: "none",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
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

export default RegisterUser;
