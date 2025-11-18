import Image from "next/image";

import Button from "@mui/material/Button";
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import SectionTitle from "@/custom components/SectionTitle";
import ImageButtonWithEndIcon from "@/custom components/ImageButtonWithEndIcon";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import PetCard from "@/components/PetCard";
import HomeBannerContent from "@/components/HomeBannerContent";
import petWithHuman from "../../public/pet_with_human.png";
import petShaken from "../../public/pet_shaken.png";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PrimaryButton from "@/custom components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { loadProducts } from "@/lib/load_products";
import { useEffect } from "react";

// Font files can be colocated inside of `pages`

const petData = [
  {
    name: "MO231 - Pomeranian White",
    img: "/pet_1.png",
    gene: "Male",
    age: "02 Months",
    price: 25000,
  },
  {
    name: "MO502 - Poodle Tiny Yellow",
    img: "/pet_2.png",
    gene: "Female",
    age: "04 Months",
    price: 5000,
  },
  {
    name: "MO102 - Poodle Tiny Sepia",
    img: "/pet_3.png",
    gene: "Male",
    age: "05 Months",
    price: 12000,
  },
  {
    name: "MO512 - Alaskan Malamute Grey",
    img: "/pet_4.png",
    gene: "Female",
    age: "08 Months",
    price: 2500,
  },
  {
    name: "MO231 - Pembroke Corgi Cream",
    img: "/pet_5.png",
    gene: "Male",
    age: "01 Months",
    price: 1000,
  },
  {
    name: "MO502 - Pembroke Corgi Tricolor",
    img: "/pet_6.png",
    gene: "Female",
    age: "11 Months",
    price: 2999,
  },
  {
    name: "MO231 - Pomeranian White",
    img: "/pet_7.png",
    gene: "Female",
    age: "3.5 Months",
    price: 4599,
  },
  {
    name: "MO512 - Poodle Tiny Dairy Cow",
    img: "/pet_8.png",
    gene: "Male",
    age: "4 Months",
    price: 2000,
  },
];

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL | string;
};

//------ SSR --------
// export const getServerSideProps = (async (context) => {
//   const productData = await loadProducts(); //called from lib folder. Server side rendering
//   console.log(productData);

//   return { props: { productData } };
// }) satisfies GetServerSideProps<{ productData: product }>;

// export default function Home({
//   productData,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Home(productData = []) {
  return (
    <>
      <Container sx={{ padding: "60px 130px" }} maxWidth="xl">
        <Box>
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Box flexGrow={1}>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                }}
              >
                Whats new?
              </Typography>
              <SectionTitle text="Take A Look At Some Of Our Pets" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ImageButtonWithEndIcon
                text="View more"
                endIcon={<ChevronRightOutlinedIcon />}
              />
            </Box>
          </Stack>
          <Grid container spacing={2} marginTop={2.8}>
            {petData.length > 0 &&
              petData.slice(0, 13).map((item, index) => (
                <Grid key={index} size={{ xs: 6, md: 4, lg: 3 }}>
                  <PetCard
                    id={index}
                    title={item.name}
                    image={item.img}
                    price={item.price}
                    category={item.gene}
                    description={item.age}
                  />
                </Grid>
              ))}
            {/* {productData.length > 0 &&
              productData.slice(0, 13).map((item: product) => (
                <Grid key={item.id} size={{ xs: 6, md: 4, lg: 3 }}>
                  <PetCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                  />
                </Grid>
              ))} */}
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" }, mt: "1rem" }}>
            <ImageButtonWithEndIcon
              text="View more"
              endIcon={<ChevronRightOutlinedIcon />}
            />
          </Box>
        </Box>
      </Container>
      <Container sx={{ padding: "60px 130px" }} maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "space-between",
            borderRadius: "20px",
            backgroundImage: ' url("/one_more_friend_bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={petWithHuman}
            style={{ maxWidth: "100%" }}
            alt="human_with_pet"
          />

          <Box
            padding={"3.5rem 4.4rem 3rem 0rem"}
            textAlign={"right"}
            sx={{ maxWidth: "100%" }}
          >
            <Stack spacing={0.2}>
              <Typography
                sx={{
                  fontSize: "42px",
                  lineHeight: "68px",
                  fontWeight: "700",
                }}
              >
                One More Friend
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  lineHeight: "60px",
                  fontWeight: "700",
                }}
              >
                Thousands more fun!
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: "0.8rem",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            >
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </Typography>

            <Stack
              direction={"row"}
              spacing={3}
              sx={{ mt: "2rem", justifyContent: "end" }}
            >
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
        </Box>
      </Container>
      <Container
        sx={{ display: { xs: "none", md: "block" }, padding: "60px 130px" }}
        maxWidth="xl"
      >
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Hard to choose right products for your pets?
            </Typography>
            <SectionTitle text="Our Products" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ImageButtonWithEndIcon
              text="View more"
              endIcon={<ChevronRightOutlinedIcon />}
            />
          </Box>
        </Stack>
        <Grid container spacing={2} marginTop={2.8}>
          {petData.length > 0 &&
            petData.map((pet, index) => (
              <Grid size={{ xs: 6, md: 4, lg: 3 }}>
                <ProductCard
                  key={index}
                  name={pet.name}
                  img={pet.img}
                  gene={pet.gene}
                  age={pet.age}
                  price={pet.price}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Container sx={{ display: { xs: "none", md: "block" }, padding: "60px 130px" }} maxWidth="xl">
        <Stack direction={"row"}>
          <Box
            display="flex"
            gap={".5rem"}
            alignItems={"center"}
            flexDirection="row"
            flexGrow={1}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Proud to be part of
            </Typography>
            <SectionTitle text="Pet Sellers" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ImageButtonWithEndIcon
              text="View all our sellers"
              endIcon={<ChevronRightOutlinedIcon />}
            />
          </Box>
        </Stack>
        <ImageList cols={7} sx={{ marginTop: ".5rem" }}>
          <ImageListItem>
            <img src="/sheba.png" alt="sheba" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/whiskas.png" alt="whiskas" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/bakers.png" alt="bakers" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/felix.png" alt="felix" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/goodboy.png" alt="goodboy" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/butchers.png" alt="butchers" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/pedigree.png" alt="pedigree" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Container>
      <Container sx={{ display: { xs: "none", md: "block" }, padding: "60px 130px" }} maxWidth="xl">
        <Stack
          sx={{
            justifyContent: "space-between",
            borderRadius: "20px",
            backgroundImage: ' url("/adoption_bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          direction={"row"}
        >
          <Box sx={{ width: "50%" }} padding={"3.5rem 0rem 3rem 4.4rem"}>
            <Stack>
              <Typography
                display={"flex"}
                gap={".5rem"}
                sx={{
                  fontSize: "42px",
                  fontWeight: "700",
                }}
              >
                Adoption <img src="/pet_foot.svg" alt="pet_foot" />
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                We need help. so do they.
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: "0.8rem",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "400",
              }}
            >
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </Typography>

            <Stack direction={"row"} spacing={3} sx={{ mt: "3rem" }}>
              <PrimaryButton text="Explore Now" />
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
            </Stack>
          </Box>
          <img
            src={"/pet_shaken.png"}
            loading="lazy"
            style={{ maxWidth: "50%" }}
          />
        </Stack>
      </Container>
    </>
  );
}
