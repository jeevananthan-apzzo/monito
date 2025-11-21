import PrimaryButton from "@/custom components/PrimaryButton";
import SectionTitle from "@/custom components/SectionTitle";
import {
  getProductDetailStaticProps,
  getProductStaticPaths,
  ProductDetailProps,
} from "@/lib/fetchProducts";
import {
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Grid,
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

export const getStaticPaths = getProductStaticPaths;
export const getStaticProps = getProductDetailStaticProps;

const productDetail = ({ productDetail }: ProductDetailProps) => {
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
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px",
          borderRadius: "20px",
          border: "1px solid #EBEEEF",
        }}
      >
        <Grid size={6}>
          <Card sx={{ padding: "10px", boxShadow: "none" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "50%",
                aspectRatio: "1",
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
            </div>
          </Card>
        </Grid>
        <Grid size={6} sx={{ padding: "0 20px" }}>
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
    </Container>
  );
};

export default productDetail;
