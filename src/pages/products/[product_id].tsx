import PrimaryButton from "@/custom components/PrimaryButton";
import SectionTitle from "@/custom components/SectionTitle";
import {
  getProductDetailStaticProps,
  getProductServerSideProps,
  getProductStaticPaths,
  ProductDetailProps,
  ProductProps,
} from "@/lib/fetchProducts";
import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ProductImageSwiper from "@/components/ProductImageSwiper";
import CustomerImageSwiper from "@/components/CustomerImageSwiper";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import PetCard from "@/components/PetCard";
import { product } from "..";
import { useRouter } from "next/router";
import { loadProductById, loadProducts } from "@/lib/load_products";
import { GetStaticProps } from "next";

export async function getStaticPaths() {
  const productsRaw = await loadProducts();
  console.log("getStaticPaths");

  const products = Array.isArray(productsRaw)
    ? productsRaw
    : productsRaw && typeof productsRaw === "object"
    ? Object.values(productsRaw)
    : [];

  return {
    paths: products.map((p: product) => ({
      params: { product_id: String(p.id) },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async (
  context
) => {
  const id = context.params?.product_id;

  const productDetail = await loadProductById(Number(id));

  const allProductsRaw = await loadProducts();
  const allProducts = Array.isArray(allProductsRaw)
    ? allProductsRaw
    : allProductsRaw && typeof allProductsRaw === "object"
    ? Object.values(allProductsRaw)
    : [];

  return {
    props: { productDetail, allProducts },
    revalidate: 60,
  };
};

const productDetail = ({ productDetail, allProducts }: ProductDetailProps) => {
  const router = useRouter();

  const ProductInfoText = ({ text }: { text: String }) => {
    return (
      <Typography
        sx={{
          color: "#99A2A5",
          fontSize: { xs: "12px", md: "14px" },
          fontWeight: "400",
        }}
      >
        {text}
      </Typography>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "relative",
          width: "100%",
          height: "50%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <IconButton
          aria-label="face book"
          onClick={() => router.back()}
          sx={{
            position: "absolute",
            zIndex: 2,
            left: "23px",
            top: "21px",
            height: "7px",
            width: "7px",
          }}
        >
          <ArrowBackIosNewRoundedIcon sx={{ color: "#D8D6D6" }} />
        </IconButton>
        <ProductImageSwiper
          images={[
            productDetail.image.toString(),
            productDetail.image.toString(),
          ]}
        />
      </Box>

      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            padding: { md: "20px" },
            borderRadius: "20px",
            border: { md: "1px solid #EBEEEF" },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: { md: "10px" },
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "relative",
                  width: "100%",
                  height: "50%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <ProductImageSwiper
                  images={[
                    productDetail.image.toString(),
                    productDetail.image.toString(),
                  ]}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "inline" },
                  background:
                    "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
                  borderRadius: "10px",
                  padding: "9px 16px",
                }}
              >
                <Box sx={{ display: { xs: "block", md: "inline" } }}>
                  <img
                    src="/gtee_pet.svg"
                    alt="icon"
                    style={{ display: "inline" }}
                  />
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: "bold",
                      display: "inline",
                      ml: "8px",
                    }}
                  >
                    100% health guarantee for pets
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { xs: "block", md: "inline" },
                    marginLeft: { md: "35px" },
                    marginTop: { xs: "8px", md: "0" },
                  }}
                >
                  <img
                    src="/identi_pet.svg"
                    alt="icon"
                    style={{ display: "inline" }}
                  />
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: "bold",
                      display: "inline",
                      ml: "8px",
                    }}
                  >
                    100% guarantee of pet identification
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <div style={{ display: "inline" }}>
                  <img
                    src="/share_icon.svg"
                    alt="icon"
                    style={{ display: "inline" }}
                  />
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      display: "inline",
                      ml: "8px",
                    }}
                  >
                    Share:
                  </Typography>
                </div>
                <Box sx={{ ml: "21px", display: "inline-block" }}>
                  <IconButton aria-label="face book" href="#fb">
                    <Image
                      fill
                      src="/fb_icon_grey.svg"
                      alt="facebook"
                      loading="lazy"
                    />
                  </IconButton>
                  <IconButton sx={{ ml: "15px" }} aria-label="twitter">
                    <Image
                      fill
                      src="/tw_icon_grey.svg"
                      alt="twitter"
                      loading="lazy"
                    />
                  </IconButton>
                  <IconButton sx={{ ml: "15px" }} aria-label="instagram">
                    <Image
                      fill
                      src="/insta_icon_grey.svg"
                      alt="instagram"
                      loading="lazy"
                    />
                  </IconButton>
                  <IconButton sx={{ ml: "15px" }} aria-label="youtube">
                    <Image
                      fill
                      src="/yt_icon_grey.svg"
                      alt="youtube"
                      loading="lazy"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ padding: { md: "20px" } }}>
            <Stack spacing={2}>
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
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/products"
                    sx={{ color: "#667479", fontWeight: "500" }}
                  >
                    Products
                  </Link>
                  <Typography sx={{ color: "#667479", fontWeight: "500" }}>
                    {productDetail.title}
                  </Typography>
                </Breadcrumbs>
              </div>
              <div className="title-price">
                <Typography
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "#99A2A5",
                    fontSize: { xs: "12px", md: "14px" },
                    fontWeight: "400",
                  }}
                >
                  {`SKU #${productDetail.id}`}
                </Typography>
                <SectionTitle text={productDetail.title} />
                <Typography
                  color="primary"
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight: "bold",
                  }}
                >{`₹ ${productDetail.price}`}</Typography>
              </div>

              <Stack direction={"row"} spacing={2}>
                <PrimaryButton text="Add to Cart" />
                <PrimaryButton text="Buy Now" variant="outlined" />
              </Stack>

              <Grid container rowSpacing={1}>
                <Grid size={6}>
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: { xs: "14px", md: "20px" },
                      fontWeight: "bold",
                    }}
                  >
                    Information
                  </Typography>
                </Grid>
                <Grid size={6} textAlign={"right"}>
                  <div style={{ display: "inline" }}>
                    <img
                      src="/share_icon.svg"
                      alt="icon"
                      style={{
                        width: "14px",
                        height: "14px",
                        display: "inline",
                      }}
                    />
                    <Typography
                      color="primary"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        display: "inline",
                        ml: "8px",
                      }}
                    >
                      Share
                    </Typography>
                  </div>
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"SKU"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: #${productDetail.id}`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Gender"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: Female`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Age"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: 2 Months`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Color"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: Appricot & Tan`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Vaccinated"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: Yes`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Dewormed"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: Yes`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Location"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: Vietnam`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Published Date"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: 12-Oct-2025`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={"Description"} />
                </Grid>
                <Grid size={6}>
                  <ProductInfoText text={`: ${productDetail.description}`} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: "2rem",
            display: { xs: "block", md: "none" },
            background:
              "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
            borderRadius: "10px",
            padding: "9px 16px",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "inline" } }}>
            <img src="/gtee_pet.svg" alt="icon" style={{ display: "inline" }} />
            <Typography
              color="primary"
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: "bold",
                display: "inline",
                ml: "8px",
              }}
            >
              100% health guarantee for pets
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "inline" },
              marginLeft: { md: "35px" },
              marginTop: { xs: "8px", md: "0" },
            }}
          >
            <img
              src="/identi_pet.svg"
              alt="icon"
              style={{ display: "inline" }}
            />
            <Typography
              color="primary"
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: "bold",
                display: "inline",
                ml: "8px",
              }}
            >
              100% guarantee of pet identification
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: "2rem" }}>
          <SectionTitle text="Our lovely Customers" />
          <div style={{ marginTop: ".5rem" }}>
            <CustomerImageSwiper
              images={[
                productDetail.image.toString(),
                productDetail.image.toString(),
                productDetail.image.toString(),
                productDetail.image.toString(),
                productDetail.image.toString(),
                productDetail.image.toString(),
                productDetail.image.toString(),
              ]}
            />
          </div>
        </Box>

        <Box sx={{ m: "2rem 0" }}>
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
            <SectionTitle text="See More Products" />
          </Box>

          <Grid container spacing={2} marginTop={2.8}>
            {allProducts.length > 0 ? (
              allProducts
                .filter((p) => p.id !== productDetail.id)
                .slice(0, 4)
                .map((item: product) => (
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
        </Box>
      </Container>
    </>
  );
};

export default productDetail;
