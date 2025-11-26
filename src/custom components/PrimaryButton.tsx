import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonProps["variant"];
}

const PrimaryButton = ({ text, variant = "contained", onClick }: PrimaryButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        borderRadius: "57px",
        fontSize: { xs: "10px", md: "16px" },
        fontWeight: "bold",
        textTransform: "none",
        padding: "10px 29px",
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
