import CartItem from "@/components/CartItem";
import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={4} mb={6}>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{  }}
        >
          <Typography
            sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold" }}
          >
            Cart
          </Typography>
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
            <CartItem/>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}></Grid>
      </Grid>
    </Container>
  );
};

export default index;
