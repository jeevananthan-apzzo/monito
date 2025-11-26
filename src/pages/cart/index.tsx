import CartItem from "@/components/CartItem";
import { useProducts } from "@/context/AppContext";
import { loadCartProducts } from "@/lib/load_products";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { product } from "..";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL | string;
  quantity: number;
};

const index = () => {
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const products = useProducts();
  const totalQuantity = cartData.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const totalPrice = cartData.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const fetchCartItems = async () => {
    try {
      const rawData: {
        id: number;
        userId: number;
        date: string;
        products: [{ productId: number; quantity: number }];
      }[] = await loadCartProducts();

      // Filter cart items by user
      const filteredByUser = rawData.filter((item) => item.userId === 1);

      const mergedProducts = Object.values(
        filteredByUser
          .flatMap((item) => item.products) // merge all product arrays
          .reduce((acc, product) => {
            if (!acc[product.productId]) {
              // first time seeing this productId
              acc[product.productId] = { ...product };
            } else {
              // sum quantities
              acc[product.productId].quantity += product.quantity;
            }
            return acc;
          }, {} as Record<number, { productId: number; quantity: number }>)
      );

      const filteredByProduct = mergedProducts.flatMap((item) => {
        const productDetail = products.productData.find(
          (p) => p.id === item.productId
        );
        return productDetail
          ? [{ ...productDetail, quantity: item.quantity }]
          : [];
      });

      setCartData(filteredByProduct);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!products.productData || products.productData.length === 0) return;
    fetchCartItems();
  }, [products]);

  return (
    <Container maxWidth="xl">
      <Typography
        sx={{
          display: "inline-block",
          fontSize: { xs: "18px", md: "20px" },
          fontWeight: "bold",
        }}
      >
        Cart{" "}
        <span
          style={{
            display: "inline-block",
            color: "#667479",
            fontSize: "12px",
            maxWidth: "80%",
          }}
        >
          ({cartData.length} items)
        </span>
      </Typography>

      {loading && <Typography textAlign={"center"}>Loading...</Typography>}

      {!loading && (
        <Grid container spacing={5} mb={6} rowSpacing={5}>
          <Grid size={{ xs: 12, md: 7.9 }} mt={2}>
            <Stack
              spacing={2}
              sx={{
                height: "100%",
                padding: { xs: "14px", md: "20px" },
                border: "1px solid #EBEEEF",
                backgroundColor: "rgba(250, 250, 250, 1)",
                borderRadius: "20px",
              }}
            >
              {cartData.length > 0 ? (
                cartData.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <Typography>Nothing to show</Typography>
              )}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} mt={2}>
            <Stack
              spacing={2}
              sx={{
                padding: { xs: "14px", md: "20px" },
                border: "1px solid #EBEEEF",
                backgroundColor: "rgba(250, 250, 250, 1)",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: { xs: "14px", md: "18px" },
                  fontWeight: "bold",
                }}
              >
                Order Summary
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#667479",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Subtotal({totalQuantity} items)
                <span style={{ marginLeft: "0.5rem", color: "#191A19" }}>
                  ₹{totalPrice}
                </span>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#667479",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Handling Charge
                <span style={{ marginLeft: "0.5rem", color: "#191A19" }}>
                  ₹5.00
                </span>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#667479",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Shipping Fee
                <span style={{ marginLeft: "0.5rem", color: "#191A19" }}>
                  ₹0.00
                </span>
              </Typography>
              <Divider />
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  Total
                  <span style={{ marginLeft: "0.5rem" }}>
                    ₹{totalPrice + 5}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#667479",
                    fontSize: { xs: "10px", md: "12px" },
                  }}
                >
                  Inclusive of all taxes{" "}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: "18px",
                    width: "100%",
                    borderRadius: "8px",
                    fontSize: { xs: "10px", md: "16px" },
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "10px 18px",
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default index;
