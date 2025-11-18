import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  variant?: ButtonProps["variant"];
}

const PrimaryButton = ({ text, variant = "contained" }: PrimaryButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: "57px",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        padding: "10px 29px",
        lineHeight: "24px",
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
