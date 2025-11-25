import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OrderedItem from "./OrderedItem";

const MyOrders = ({ orders = [{ title: "Jean" }] }) => {
  return (
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
      <Typography
        sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold" }}
      >
        My Orders
      </Typography>
      {orders.length > 0 ? (
        <>
          <OrderedItem />
          <OrderedItem />
        </>
      ) : (
        <Box sx={{ height: "100%", textAlign: "center" }}>
          <img
            style={{ margin: "0 auto" }}
            src="/myorders_empty.png"
            alt="orders empty"
          />
          <Typography
            sx={{
              mt: { xs: "10px", md: "28px" },
              margin: "0 auto",
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: "bold",
              color: "#000",
            }}
          >
            You haven't placed any order yet!
          </Typography>
          <Typography
            sx={{
              margin: "0 auto",
              width: { xs: "85%", md: "40%" },
              textAlign: "center",
              fontSize: { xs: "14px", md: "16px" },
              color: "#757675",
            }}
          >
            Order section is empty. After placing order, You can track them from
            here!
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default MyOrders;
