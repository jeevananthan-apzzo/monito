import PrimaryButton from "@/custom components/PrimaryButton";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import React from "react";
import Image from "next/image";

const HomeBannerContent = () => {
  return (
    <Box
      sx={{
        width: {sm: "40%", md: "50%", lg: "40%" },
        position: "absolute" ,
        zIndex: 1,
        // left: { md: "2.3%" },
        // top: { md: "15%" },
      }}
      marginTop={{xs: "0rem", sm: "1rem", md:"3rem"}}
    >
      <Stack spacing={1} >
        <Typography
          sx={{
            fontSize: { xs: "46px", md: "60px" },
            fontWeight: "700",
          }}
        >
          One More Friend
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "46px" },
            // lineHeight: "60px",
            fontWeight: "700",
          }}
        >
          Thousands more fun!
        </Typography>
      </Stack>

      <Typography
        sx={{
          mt: { xs: ".5rem", md: "2rem" },
          fontSize: { xs: "12px", md: "16px" },
          // lineHeight: "24px",
          fontWeight: "400",
        }}
      >
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </Typography>

      <Stack direction={"row"} spacing={3} sx={{ mt: {xs: "1rem",md: "2rem"} }}>
        <Button
          variant={"outlined"}
          sx={{
            borderRadius: "57px",
            fontSize: {xs: "13px" , md: "16px"},
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
