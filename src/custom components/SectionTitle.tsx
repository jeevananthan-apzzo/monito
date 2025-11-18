import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      sx={{
        // display: "inline-block",
        color: "#003459",
        fontSize: "24px",
        lineHeight: "36px",
        fontWeight: "700",
      }}
    >
      {text}
    </Typography>
  );
};

export default SectionTitle;
