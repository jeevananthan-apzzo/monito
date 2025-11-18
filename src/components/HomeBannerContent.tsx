import PrimaryButton from "@/custom components/PrimaryButton";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import React from "react";
import Image from "next/image";

const HomeBannerContent = () => {
  return (
    <Box sx={{width: "35%", position: "absolute", left: "2.3%", top: "16%"}}>
      <Stack spacing={1}>
        <Typography
          sx={{
            fontSize: "60px",
            lineHeight: "68px",
            fontWeight: "700",
          }}
        >
          One More Friend
        </Typography>
        <Typography
          sx={{
            fontSize: "46px",
            lineHeight: "60px",
            fontWeight: "700",
          }}
        >
          Thousands more fun!
        </Typography>
      </Stack>

      <Typography
        sx={{
          mt: "2rem",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
        }}
      >
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </Typography>

      <Stack direction={"row"} spacing={3} sx={{ mt: "2rem" }}>
        <Button
          variant={"outlined"}
          sx={{
            borderRadius: "57px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 29px",
            lineHeight: "24px",
          }}
          endIcon={<PlayCircleOutlineOutlinedIcon />}
        >
          View Intro
        </Button>
        <PrimaryButton text="Explore Now" />
      </Stack>
    </Box>
  );
};

export default HomeBannerContent;
