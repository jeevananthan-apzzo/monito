import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface PetType {
  name: string;
  img: string;
  gene: string;
  age: string;
  price: number;
}

const ProductCard = ({ name, img, gene, age, price }: PetType) => {
  return (
    <Card
      sx={{
        boxShadow: " 0px 4px 28px -2px #00000014",
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        alt="pet_image"
        height="264"
        width="264"
        image={img}
        sx={{ borderRadius: "12px" }}
      />
      <Stack
        spacing={0.5}
        sx={{
          padding: "12px 6px 10px 6px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {name.length > 30 ? `${name.slice(0, 30)}...` : name}
        </Typography>
        <Typography
          sx={{
            color: "#667479",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          {`Gene: ${gene}`} <span style={{ margin: "0 0.5rem" }}>.</span>{" "}
          {`Age: ${age}`}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {`₹${price}.00`}
        </Typography>
        <CardActions sx={{ padding: "6px 0 0 0" }}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={
              <Image src={"/gift_icon.svg"} width={20} height={20} alt="gift" />
            }
            disableElevation
            sx={{
              justifyContent: "left",
              alignItems: "center",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "none",
            }}
          >
            <span style={{ marginRight: "0.5rem" }}>.</span> Free Toy & Free
            Shaker
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ProductCard;
