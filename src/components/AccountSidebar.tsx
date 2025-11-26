import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const AccountSidebar = () => {
  const router = useRouter();
  const path = router.asPath;
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Stack>
      <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
        <Avatar sx={{ height: 44, width: 44 }} src="/person_filled_grey.svg" />
        <Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#000" }}
          >
            Username
          </Typography>
          <Typography sx={{ mt: "2px", fontSize: "12px", color: "#757675" }}>
            +91 0124356789
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ mt: "14px", mb: "5px" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            selected={path === "/account" || path === "/account/myprofile"}
            onClick={() => router.push("/account/")}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/person_outlined.svg"
                  alt="person_outlined"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="My Profile" sx={{ color: "#000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mt: "2px" }}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            selected={path === "/account/myorders"}
            onClick={() => router.push("/account/myorders")}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/shop_bag.svg"
                  alt="shop_bag"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="My Orders" sx={{ color: "#000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mt: "2px" }}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            selected={path === "/account/wishlist"}
            onClick={() => router.push("/account/wishlist")}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/wishlist.svg"
                  alt="wishlist"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Wishlist" sx={{ color: "#000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mt: "2px" }}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            selected={path === "/account/addresses"}
            onClick={() => router.push("/account/addresses")}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/location_pin.svg"
                  alt="location_pin"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Saved Addresses" sx={{ color: "#000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mt: "2px" }}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            selected={path === "/account/notifications"}
            onClick={() => router.push("/account/notifications")}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/notify_bell.svg"
                  alt="notify_bell"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Notifications" sx={{ color: "#000" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mt: "2px" }}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 52, 89, 0.15)",
              },
            }}
            onClick={handleLogout}
          >
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                }}
              >
                <img
                  src="/logout.svg"
                  alt="logout"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain", // or "cover"
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Logout" sx={{ color: "#EF3349" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default AccountSidebar;
