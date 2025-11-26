import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const deliveryStatus = {
  delivered: {
    color: "#05A143",
    icon: "/delivered.svg",
  },
  cancelled: {
    color: "#EF3349",
    icon: "/cancelled.svg",
  },
  shipped: {
    color: "#4685DF",
    icon: "/shipped.svg",
  },
  placed: {
    color: "#A260EA",
    icon: "/placed.svg",
  },
};

const OrderedItem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <img
          src="/product.png"
          alt="product_img"
          style={{ width: isMobile ? 55 : 80, height: 80 }}
        />
        <Box
          flexGrow={1}
          sx={{
            ml: "8px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "bold",
              color: "#000",
              display: "-webkit-box",
              WebkitLineClamp: 1, // number of lines
              WebkitBoxOrient: "vertical", // must be vertical
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: { xs: "20px", md: "100px" },
              maxWidth: "80%",
            }}
          >
            Reflex Plus Adult Cat Food Salmon
          </Typography>
          <Typography
            sx={{
              color: "#667479",
              fontWeight: "bold",
              fontSize: { xs: "10px", md: "12px" },
              maxWidth: "80%",
            }}
          >
            {`Category: Men's Clothing`}
            <span style={{ margin: "0 0.5rem" }}>.</span> {`Qty: 2kg`}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "bold",
              color: "#000",
              maxWidth: "80%",
            }}
          >
            ₹199.00
          </Typography>
          <Typography
            sx={{
              display: { xs: "inline-block", md: "none" },
              color: "#667479",
              fontSize: { xs: "10px", md: "14px" },
              maxWidth: "90%",
            }}
          >
            Delivered at 02 Mar 2025, 09:20 AM
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: deliveryStatus.delivered.color,
              fontWeight: "600",
              fontSize: { xs: "10px", md: "16px" },
              whiteSpace: "nowrap",
              verticalAlign: "middle"
            }}
          >
            <img
              src={deliveryStatus.delivered.icon}
              alt="order status"
              style={{
                width: 13,
                height: 13,
                marginRight: "8px",
                display: "inline-block", // make it inline
                verticalAlign: "middle",
              }}
            />
            Order Delivered
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "inline-block" },
              color: "#667479",
              fontSize: { xs: "10px", md: "14px" },
            }}
          >
            Delivered at 02 Mar 2025, 09:20 AM
          </Typography>
        </Box>
      </Stack>
      <Divider />
    </>
  );
};

export default OrderedItem;
