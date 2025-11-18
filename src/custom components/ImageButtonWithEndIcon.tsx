import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

interface ImageButtonWithEndIconProps {
  text: string;
  endIcon: ReactNode;
  variant?: ButtonProps["variant"];
}

const ImageButtonWithEndIcon = ({
  text,
  endIcon,
  variant = "outlined",
}: ImageButtonWithEndIconProps) => {
  return (
    <Button
      variant={variant}
      sx={{
        // height: "44px",
        width: "100%",
        borderRadius: "57px",
        fontSize: "14px",
        fontWeight: "500",
        textTransform: "none",
        padding: "8px 20px",
      }}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default ImageButtonWithEndIcon;
