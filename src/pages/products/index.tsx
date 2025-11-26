import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import allDogs from "../../../public/all_products_banner_dogs_1.png";
import Image from "next/image";
import PrimaryButton from "@/custom components/PrimaryButton";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SectionTitle from "@/custom components/SectionTitle";
import { styled } from "@mui/material/styles";
import ImageButtonWithEndIcon from "@/custom components/ImageButtonWithEndIcon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InferGetServerSidePropsType } from "next";
import PetCard from "@/components/PetCard";
import { getProductServerSideProps, ProductProps } from "@/lib/fetchProducts";
import { loadProducts } from "@/lib/load_products";
import { product } from "..";

export async function getStaticProps() {
  const productDataRaw = await loadProducts();

  const productData = Array.isArray(productDataRaw)
    ? productDataRaw
    : productDataRaw && typeof productDataRaw === "object"
    ? Object.values(productDataRaw)
    : [];

  return { props: { productData } };
}



const index = ({ productData }: ProductProps) => {
  const [filteredData, setFilteredData] = useState<product[]>([]);
  const colors = [
    { label: "Green", value: "green", hex: "#4caf50" },
    { label: "Red", value: "red", hex: "#f44336" },
    { label: "Blue", value: "blue", hex: "#2196f3" },
  ];

  const sortables: Record<number, string> = {
    10: "Popularity",
    20: "A-Z Order",
    30: "Price low - high",
  };

  const [sortBy, setSortby] = useState<number>(1);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const PrevIcon = () => (
    <img src={"/left_pg.svg"} alt="prev" style={{ width: 12, height: 12 }} />
  );

  const NextIcon = () => (
    <img src={"/right_pg.svg"} alt="next" style={{ width: 12, height: 12 }} />
  );

  const handleIncrement = (
    setPrice: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    setPrice((prev: number | null) => {
      return prev === null ? 100 : prev + 100;
    });
  };

  const handleDecrement = (
    setPrice: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    setPrice((prev: number | null) => {
      return prev === null ? 0 : prev - 100;
    });
  };

  const [page, setPage] = React.useState(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const [category, setCategory] = useState<string[]>([]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setCategory((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  //when filtering
  useEffect(() => {
    const tempFiltered = productData.filter((p) => {
      const price = Number(p.price);

      const inCategory =
        category.length > 0 ? category.includes(p.category) : true;

      const inPriceRange =
        price >= (minPrice ?? 0) && price <= (maxPrice ?? Infinity);

      return inCategory && inPriceRange;
    });

    setFilteredData(tempFiltered);
  }, [category, minPrice, maxPrice]);

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
          padding: { xs: "", md: "50px 75px", lg: "60px 85px" },
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
                fontSize: { xs: "28px", lg: "42px" },
                fontWeight: "700",
              }}
            >
              One More Friend
            </Typography>
            <Typography
              sx={{
                color: { md: "#FDFDFD" },
                fontSize: { xs: "20px", lg: "28px" },
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
              fontSize: { xs: "12px", lg: "14px" },
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
                fontSize: { xs: "10px", lg: "16px" },
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
                fontSize: { xs: "10px", lg: "16px" },
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
      <Grid container m={"1rem 0"} columnSpacing={3}>
        <Grid size={4} sx={{ display: { xs: "none", md: "grid" } }}>
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
                <FormControlLabel
                  value={"men's clothing"}
                  control={<Checkbox onChange={handleCategoryChange} />}
                  label="Men's Clothing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value={"women's clothing"}
                      onChange={handleCategoryChange}
                    />
                  }
                  label="Women's Clothing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value={"jewelery"}
                      onChange={handleCategoryChange}
                    />
                  }
                  label="Jewelry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value={"electronics"}
                      onChange={handleCategoryChange}
                    />
                  }
                  label="Electronics"
                />
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
                {colors.map((color) => (
                  <FormControlLabel
                    key={color.value}
                    control={<Checkbox />}
                    label={
                      <Box display="flex" alignItems="center" gap={1}>
                        <Box
                          width={16}
                          height={16}
                          borderRadius="50%"
                          bgcolor={color.hex}
                        />
                        {color.label}
                      </Box>
                    }
                  />
                ))}
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
                Price
              </Typography>
              <Stack direction={"row"} spacing={"1"}>
                <FormControl variant="filled">
                  <TextField
                    value={minPrice}
                    placeholder="Min"
                    id="min-price"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderBottom: "1px solid #EBEEEF",
                      },
                    }}
                    size="small"
                    disabled
                    slotProps={{
                      input: {
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment
                            sx={{
                              padding: ".3rem 0",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                            position="end"
                          >
                            <IconButton
                              size="small"
                              onClick={() => handleIncrement(setMinPrice)}
                            >
                              <KeyboardArrowUpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => handleDecrement(setMinPrice)}
                              disabled={!minPrice || minPrice <= 0}
                            >
                              <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    aria-describedby="min-price-input"
                    inputProps={{
                      "aria-label": "min-price",
                    }}
                  />
                </FormControl>
                <FormControl variant="filled">
                  <TextField
                    value={maxPrice}
                    id="max-price"
                    placeholder="Max"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderBottom: "1px solid #EBEEEF",
                      },
                    }}
                    size="small"
                    slotProps={{
                      input: {
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment
                            sx={{
                              padding: ".3rem 0",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                            position="end"
                          >
                            <IconButton
                              size="small"
                              onClick={() => handleIncrement(setMaxPrice)}
                            >
                              <KeyboardArrowUpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              disabled={!maxPrice || maxPrice <= 0}
                              onClick={() => handleDecrement(setMaxPrice)}
                            >
                              <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    aria-describedby="max-price-input"
                  />
                </FormControl>
              </Stack>
            </div>

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
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
        >
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Box flexGrow={1}>
              <SectionTitle text="All Products" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Select
                value={sortables[sortBy]} // show empty string if null
                onChange={(e) => setSortby(Number(e.target.value))}
                displayEmpty
                inputProps={{ "aria-label": "sort by " }}
                IconComponent={ExpandMoreIcon}
                size="small"
                renderValue={(selected) => {
                  if (!selected) return <span>Sort by: Popularity</span>;
                  return `Sort by: ${sortables[Number(selected)]}`;
                }}
                sx={{
                  // width: "166px",
                  borderRadius: "57px",
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: "500",
                  textTransform: "none",
                  padding: "6px 20px",
                }}
              >
                <MenuItem value={1} selected>
                  Popularity
                </MenuItem>
                <MenuItem value={2}>A-Z Order</MenuItem>
                <MenuItem value={3}>Price low - high</MenuItem>
              </Select>
            </Box>
          </Stack>
          <Grid flexGrow={1} container spacing={2}>
            {productData.length > 0 ? (
              filteredData.length > 0 ? (
                filteredData
                  .slice(page * 12 - 12, page * 12)
                  .map((item: product) => (
                    <Grid key={item.id} size={{ xs: 6, md: 4 }}>
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
                <Typography>
                  Nothing to show, Try with different filtering method
                </Typography>
              )
            ) : (
              <Typography>Nothing to show</Typography>
            )}
          </Grid>
          <Box>
            <Pagination
              count={Math.ceil(filteredData.length / 15)}
              page={page}
              onChange={handlePageChange}
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  slots={{
                    previous: PrevIcon,
                    next: NextIcon,
                  }}
                />
              )}
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                },
                "& .Mui-selected": {
                  color: "#fdfdfd",
                  bgcolor: "#002a48 !important",
                },
                "& .MuiPagination-ul": { justifyContent: "center" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
