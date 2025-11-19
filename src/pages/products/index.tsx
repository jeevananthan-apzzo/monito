import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import allDogs from "../../../public/all_products_banner_dogs_1.png";
import Image from "next/image";
import PrimaryButton from "@/custom components/PrimaryButton";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SectionTitle from "@/custom components/SectionTitle";
import { styled } from "@mui/material/styles";
import ImageButtonWithEndIcon from "@/custom components/ImageButtonWithEndIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    borderRadius: "4px",
    border: "1px solid #CCD1D2",
    // width: 20,
    // height: 20,
  },
}));

const index = () => {
  return (
    <Container maxWidth="xl">
      <div role="presentation">
        <Breadcrumbs separator={"›"} aria-label="nav">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ color: "#667479", fontWeight: "500" }}
          >
            Home
          </Link>
          <Typography sx={{ color: "#667479", fontWeight: "500" }}>
            Products
          </Typography>
        </Breadcrumbs>
      </div>

      <Box
        sx={{
          mt: "1rem",
          borderRadius: "20px",
          backgroundImage: {
            xs: ' url("/all_products_mobile_banner_bg.png")',
            md: ' url("/all_products_banner_dogs_1.png")',
          },
          padding: { xs: "", md: "60px 85px" },
          height: "378px",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          textAlign={{ xs: "center", md: "right" }}
          sx={{
            position: { md: "absolute" },
            right: "56px",
            width: { xs: "100%", md: "35%", xl: "28%" },
            padding: { xs: ".5rem 1rem", md: "1rem 2rem 0 0" },
          }}
        >
          <Stack spacing={0.2}>
            <Typography
              sx={{
                color: { md: "#FDFDFD" },
                fontSize: { xs: "28px", md: "42px" },
                fontWeight: "700",
              }}
            >
              One More Friend
            </Typography>
            <Typography
              sx={{
                color: { md: "#FDFDFD" },
                fontSize: { xs: "20px", md: "28px" },
                fontWeight: "700",
              }}
            >
              Thousands more fun!
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: { md: "#CCD1D2" },
              mt: "0.8rem",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: "400",
            }}
          >
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </Typography>

          <Stack
            direction={"row"}
            spacing={{ xs: 1, md: 3 }}
            sx={{
              mt: { xs: "1rem", md: "2rem" },
              justifyContent: { xs: "center", md: "end" },
            }}
          >
            <Button
              variant={"outlined"}
              sx={{
                borderRadius: "57px",
                fontSize: { xs: "10px", md: "16px" },
                fontWeight: "bold",
                textTransform: "none",
                padding: "10px 29px",
                color: { md: "#FDFDFD" }, // text color
                borderColor: { md: "#FDFDFD" }, // border color for outlined variant
              }}
              endIcon={<PlayCircleOutlineOutlinedIcon />}
            >
              View Intro
            </Button>
            <Button
              variant={"contained"}
              sx={{
                borderRadius: "57px",
                fontSize: { xs: "10px", md: "16px" },
                fontWeight: "bold",
                textTransform: "none",
                padding: "10px 29px",
                backgroundColor: { md: "#FDFDFD" },
                color: { md: "#002a48" },
              }}
            >
              Explore Now
            </Button>
          </Stack>
        </Box>
      </Box>
      <Grid container mt={"1rem"}>
        <Grid size={3}>
          <Stack spacing={2}>
            <SectionTitle text="Filter" />
            <div>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Category
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Jewelry" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Men's Clothing"
                />
                <FormControlLabel control={<Checkbox />} label="Electronics" />
              </FormGroup>
            </div>
            <Divider />

            <div>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Color
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Red" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Green"
                />
                <FormControlLabel control={<Checkbox />} label="Blue" />
              </FormGroup>
            </div>
            <Divider />
            <div>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Breed
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Small" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Medium"
                />
                <FormControlLabel control={<Checkbox />} label="Large" />
              </FormGroup>
            </div>
          </Stack>
        </Grid>
        <Grid size={9}>
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Box flexGrow={1}>
              <SectionTitle text="All Products" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ImageButtonWithEndIcon
                text="Sort by: Popular"
                endIcon={<ExpandMoreIcon />}
              />
            </Box>
          </Stack>
          <Box flexGrow={1}></Box>
          <Box textAlign={"center"}>
            <Pagination count={10} shape="rounded" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
