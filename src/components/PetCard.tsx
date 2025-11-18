import { Card, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

interface PetType {
  name: string;
  img: string;
  gene: string;
  age: string;
  price: number;
}

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL | string;
};

const PetCard = ({ id, title, price, description, category, image }: product) => {
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
        image={image.toString()}
        sx={{ borderRadius: "12px" }}
      />
      <Stack
        spacing={0.5}
        sx={{
          padding: "12px 8px 20px 8px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {(title.length > 30) ? `${title.slice(0,30)}...` : title }
        </Typography>
        <Typography
          sx={{
            color: "#667479",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          {/* {`Gene: ${gene}`} <span style={{ margin: "0 0.5rem" }}>.</span>{" "} */}
          {`Category: ${category}`}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          {`₹${price}`}
        </Typography>
      </Stack>
    </Card>
  );
};

export default PetCard;
