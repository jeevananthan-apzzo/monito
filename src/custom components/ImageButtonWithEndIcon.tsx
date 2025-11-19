import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

interface ImageButtonWithEndIconProps {
  text: string;
  endIcon: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonProps["variant"];
}

const ImageButtonWithEndIcon = ({
  text,
  endIcon,
  onClick,
  variant = "outlined",
}: ImageButtonWithEndIconProps) => {
  return (
    <Button
      variant={variant}
      sx={{
        // height: "44px",
        width: "100%",
        borderRadius: "57px",
        fontSize: {xs: "10px" , md: "14px"},
        fontWeight: "500",
        textTransform: "none",
        padding:  "8px 20px",
      }}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ImageButtonWithEndIcon;
