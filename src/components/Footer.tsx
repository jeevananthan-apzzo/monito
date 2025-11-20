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
          // padding: {xs: "0 24px", md: "50px 0 40px 0"},
          paddingTop: "50px",
          paddingBottom: "40px",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px",
            padding: "32px",
            bgcolor: "#003459",
          }}
          spacing={{ xs: 2, md: 5 }}
        >
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: "30%" },
              fontSize: { xs: "15px", md: "24px" },
              fontWeight: "bold",
            }}
            variant="h6"
            color="#FDFDFD"
          >
            Register Now So You Don&#39;t Miss Our Programs
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              width: { xs: "100%", md: "70%" },
              borderRadius: "16px",
              padding: "12px",
              bgcolor: "#fff",
              alignItems: "center",
            }}
            spacing={1.5}
            flexGrow={1}
          >
            <TextField
              id="user-mail"
              placeholder="Enter your Email"
              variant="outlined"
              size="small"
              sx={{
                width: { xs: "100%", md: "20%" },
                fontSize: { xs: "13px" },
                flexGrow: "1",
                borderRadius: "8px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: "20%" },
                borderRadius: "8px",
                fontSize: { xs: "13px", md: "17px" },
                fontWeight: "400",
                textTransform: "none",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
              size="small"
            >
              Subscribe Now
            </Button>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between", alignItems: { xs: "center" } }}
        >
          <Stack direction="row">
            {navItems.map((item) => (
              <Button
                variant="text"
                key={item}
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: "bold",
                  color: "#002a48",
                  textTransform: "none",
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>

          <Stack direction={"row"} spacing={{xs: 2, md: 3}}>
            <IconButton aria-label="face book" href="#fb">
              <Image fill src="/fb_icon.svg" alt="facebook" loading="lazy" />
            </IconButton>
            <IconButton aria-label="twitter">
              <Image fill src="/tw_icon.svg" alt="twitter" loading="lazy" />
            </IconButton>
            <IconButton aria-label="instagram">
              <Image
                fill
                src="/insta_icon.svg"
                alt="instagram"
                loading="lazy"
              />
            </IconButton>
            <IconButton aria-label="youtube">
              <Image fill src="/yt_icon.svg" alt="youtube" loading="lazy" />
            </IconButton>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 0, md: 3 }}
          sx={{
            rowGap: { xs: "1rem", md: 0 },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              order: 2,
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: "400",
              color: "#667479",
            }}
          >
            © 2025 Monito. All rights reserved.
          </Typography>
          <Image
            src={monitoLogo}
            alt="monito logo"
            width={115}
            height={40}
            style={{ order: 1 }}
          />
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ fontSize: { xs: "12px", md: "14px" }, order: 0 }}
          >
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
