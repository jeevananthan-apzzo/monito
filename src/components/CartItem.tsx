import {
  Box,
  Divider,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { product } from "@/pages";
import { CartItem as CartItemType } from "@/pages/cart";

const CartItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  quantity,
}: CartItemType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [qty, setQuantity] = useState(quantity);
  return (
    <>
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <img
          src={image ? image.toString() : "/product.png"}
          alt="product_img"
          style={{ width: isMobile ? 70 : 130, height: isMobile ? 70 : 130 }}
        />
        <Box
          flexGrow={1}
          sx={{
            ml: "8px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
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
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#667479",
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "12px" },
                maxWidth: "80%",
              }}
            >
              {`Category: ${category}`}
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
              {`₹${price}`}
            </Typography>
          </div>

          <OutlinedInput
            value={qty}
            onChange={(e) => setQuantity(Number(e.target.value))}
            sx={{
              width: "114px",
              height: "40px",
              "& .MuiOutlinedInput-notchedOutline": { borderRadius: "8px" },
              "& .MuiInputBase-input": { textAlign: "center" },
            }}
            startAdornment={
              <IconButton
                sx={{
                  width: 28,
                  height: 28,
                  padding: "5px",
                  borderRadius: "8px",
                  bgcolor: "#CDCDCD",
                }}
                disableRipple
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                <RemoveRoundedIcon sx={{ color: "#fff" }} />
              </IconButton>
            }
            endAdornment={
              <IconButton
                sx={{
                  width: 28,
                  height: 28,
                  padding: "5px",
                  borderRadius: "8px",
                  bgcolor: { xs: "#0F61D7", md: "#191A19" },
                }}
                disableRipple
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <AddRoundedIcon sx={{ color: "#fff" }} />
              </IconButton>
            }
          />
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <img
              src={"/delete.svg"}
              alt="delete"
              style={{
                width: 15,
                height: 15,
                marginRight: "8px",
                display: "inline-block", // make it inline
              }}
            />
          </IconButton>
        </Box>
      </Stack>
      <Divider />
    </>
  );
};

export default CartItem;
