import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import monitoLogo from "../../public/logo.svg";
import { navItems } from "./Header";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="monito_footer">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "50px 130px 40px 130px",
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px",
            padding: "32px",
            bgcolor: "#003459",
          }}
          spacing={5}
        >
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: "30%" },
              fontSize: "24px",
              fontWeight: "bold",
            }}
            variant="h6"
            color="#FDFDFD"
          >
            Register Now So You Don't Miss Our Programs
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              borderRadius: "16px",
              padding: "12px",
              bgcolor: "#fff",
            }}
            spacing={1}
            flexGrow={1}
          >
            <TextField
              id="user-mail"
              placeholder="Enter your Email"
              variant="outlined"
              size="small"
              sx={{ flexGrow: "1", borderRadius: "8px" }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "400",
                textTransform: "none",
                paddingRight: "28px",
                paddingLeft: "28px",
              }}
              size="small"
            >
              Subscribe Now
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
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

          <Stack direction={"row"} spacing={1}>
            <IconButton aria-label="face book" href="#fb">
              <img src="/fb_icon.svg" alt="facebook" loading="lazy" />
            </IconButton>
            <IconButton aria-label="twitter">
              <img src="/tw_icon.svg" alt="twitter" loading="lazy" />
            </IconButton>
            <IconButton aria-label="instagram">
              <img src="/insta_icon.svg" alt="instagram" loading="lazy" />
            </IconButton>
            <IconButton aria-label="youtube">
              <img src="/yt_icon.svg" alt="youtube" loading="lazy" />
            </IconButton>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#667479",
            }}
          >
            © 2025 Monito. All rights reserved.
          </Typography>
          <Image src={monitoLogo} alt="monito logo" width={115} height={40} />
          <Stack direction={"row"} spacing={2}>
            <Link href="#terms" underline="hover">
              Terms of Service
            </Link>
            <Link href="#privacy" underline="hover">
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
