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
import { useRouter } from "next/router";
import { getProductServerSideProps, ProductProps } from "@/lib/fetchProducts";

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

export type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL | string;
};

export async function getStaticProps() {
  const productDataRaw = await loadProducts();

  const productData = Array.isArray(productDataRaw)
    ? productDataRaw
    : productDataRaw && typeof productDataRaw === "object"
    ? Object.values(productDataRaw)
    : [];

  return { props: { productData } };
}

export default function Home({ productData }: ProductProps) {
  // export default function Home(productData = []) {
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productDataRaw: product[] = await loadProducts();
        console.log("allProducts", productDataRaw);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Stack spacing={2} alignItems={"center"}>
      <Container maxWidth="xl" sx={{ paddingTop: "3rem" }}>
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
                onClick={() => router.push("/products")}
              />
            </Box>
          </Stack>
          <Grid container spacing={2} marginTop={2.8}>
            {productData.length > 0 ? (
              productData.slice(0, 12).map((item: product) => (
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
              ))
            ) : (
              <Typography>Nothing to show</Typography>
            )}
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" }, mt: "1rem" }}>
            <ImageButtonWithEndIcon
              text="View more"
              endIcon={<ChevronRightOutlinedIcon />}
              onClick={() => router.push("/products")}
            />
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ paddingTop: "3rem", paddingBottom: { xs: "3rem", md: "3rem" } }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            rowGap: "1rem",
            borderRadius: "20px",
            backgroundImage: {
              xs: ' url("/one_more_friend_mobile_bg.png")',
              md: ' url("/one_more_friend_bg.png")',
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{ order: { xs: 1, md: 0 }, width: { xs: "100%", md: "50%" } }}
          >
            <Image
              src={petWithHuman}
              alt="human_with_pet"
              style={{ margin: "auto 0" }}
            />
          </Box>

          <Box
            textAlign={{ xs: "center", md: "right" }}
            sx={{
              width: { xs: "100%", md: "50%" },
              padding: { xs: ".5rem 1rem", md: "1rem 2rem 0 0" },
            }}
          >
            <Stack spacing={0.2}>
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "42px" },
                  fontWeight: "700",
                }}
              >
                One More Friend
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "28px" },
                  fontWeight: "700",
                }}
              >
                Thousands more fun!
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: "0.8rem",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: "400",
              }}
            >
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
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
                }}
                endIcon={<PlayCircleOutlineOutlinedIcon />}
              >
                View Intro
              </Button>
              <PrimaryButton text="Explore Now" />
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Container
        sx={{ display: { xs: "none", md: "block" }, paddingTop: "3rem" }}
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
              <Grid key={index} size={{ xs: 6, md: 4, lg: 3 }}>
                <ProductCard
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
      <Container
        sx={{ display: { xs: "none", md: "block" }, paddingTop: "3rem" }}
        maxWidth="xl"
      >
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
          <Box sx={{}}>
            <ImageButtonWithEndIcon
              text="View all our sellers"
              endIcon={<ChevronRightOutlinedIcon />}
            />
          </Box>
        </Stack>
        <ImageList cols={7} sx={{ marginTop: ".5rem" }}>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image src={"/sheba.png"} alt="sheba image" fill sizes="264" />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/whiskas.png"}
                alt="whiskas image"
                fill
                sizes="264"
              />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image src={"/bakers.png"} alt="bakers image" fill sizes="264" />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image src={"/felix.png"} alt="felix image" fill sizes="264" />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/goodboy.png"}
                alt="goodboy image"
                fill
                sizes="264"
              />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/butchers.png"}
                alt="butchers image"
                fill
                sizes="264"
              />
            </div>
          </ImageListItem>
          <ImageListItem>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/pedigree.png"}
                alt="pedigree image"
                fill
                sizes="264"
              />
            </div>
          </ImageListItem>
        </ImageList>
      </Container>
      <Container
        sx={{
          display: { xs: "none", md: "block" },
          paddingTop: "3rem",
          paddingBottom: { xs: "3rem", md: "3rem" },
        }}
        maxWidth="xl"
      >
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
    </Stack>
  );
}
