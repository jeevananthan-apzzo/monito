import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import Image from "next/image";
import monitoLogo from "../../public/logo.svg";

import { Link, OutlinedInput, Stack } from "@mui/material";
import { useRouter } from "next/router";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

interface OtpVerifyProps {
  handleClose: () => void;
  setAuthState: React.Dispatch<React.SetStateAction<string>>;
}

const OtpVerify = ({ handleClose, setAuthState }: OtpVerifyProps) => {
  const router = useRouter();
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

  const handleVerify = () => {
    handleClose();
    router.push("/");
  };

  return (
    <Box
      sx={{
        padding: { md: "21px" },
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
      className="email-verify-section"
    >
      <div style={{ textAlign: "end" }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
        spacing={{ xs: 0.99, md: 4 }}
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
            Verify your email
          </Typography>
          <Typography
            sx={{
              mt: { xs: "10px", md: "7px" },
              fontSize: { xs: "12px", md: "16px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Please enter 4 digit OTP sent on email address
          </Typography>
          <Typography
            color="warning"
            sx={{
              mt: { xs: "10px", md: "7px" },
              fontSize: { xs: "12px", md: "16px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <img
              src="/email_edit.svg"
              alt="email_edit"
              style={{ display: "inline" }}
            />
            <span>example@email.com</span>
          </Typography>
        </div>
        <Box
          sx={{
            mt: { xs: "20px !important", md: "0" },
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
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
          onClick={handleVerify}
          sx={{
            marginTop: { xs: "1rem !important", md: "" },
            width: "100%",
            borderRadius: "8px",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 29px",
          }}
        >
          Verify
        </Button>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography color="textSecondary" sx={{ fontSize: "14px" }}>
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
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "bold",
              textTransform: "none",
            }}
            startIcon={<ArrowBackIosNewRoundedIcon sx={{ height: "14px" }} />}
            onClick={() => setAuthState("login")}
          >
            Return to Login
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default OtpVerify;
