import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import PrimaryButton from "@/custom components/PrimaryButton";
const MyProfile = () => {
  const nations = ["Indian", "Foreign countries"];
  const [countryCode, setCountryCode] = useState(91);
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("male");

  const [date, setDate] = useState("");
  const hiddenDateInputRef = useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    hiddenDateInputRef.current?.showPicker(); // opens native date picker
  };

  const [avatarSrc, setAvatarSrc] = useState<string | undefined>(undefined);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          padding: { xs: "14px", md: "20px" },
          border: "1px solid #EBEEEF",
          backgroundColor: "rgba(250, 250, 250, 1)",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between ",
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "bold",
          }}
        >
          Contact Information
          <Button
            variant="contained"
            sx={{
              display: { xs: "inline-flex", md: "none" },
              borderRadius: "8px",
              fontSize: { xs: "10px", md: "16px" },
              fontWeight: "bold",
              textTransform: "none",
              padding: {xs: "2px 14px", md: "10px 18px"},
            }}
          >
            Change
          </Button>
        </Typography>

        <FormControl
          variant="outlined"
          sx={{ marginTop: "8px", width: "100%" }}
        >
          <Typography
            sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
          >
            Phone Number
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ mt: "8px", alignItems: "center" }}
          >
            <OutlinedInput
              id="user-phone"
              type="tel"
              placeholder="Enter your number"
              aria-describedby="user-phone"
              inputProps={{
                "aria-label": "phone number",
              }}
              size={isMobile ? "small" : "medium"}
              startAdornment={
                <Select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  sx={{
                    mt: "0",
                    minWidth: 100,
                    border: "none",
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      gap: "6px", // spacing between flag and code
                      padding: "4px 8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  IconComponent={ExpandMoreRoundedIcon}
                >
                  <MenuItem value={91}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <img
                        src="/in_flag.png"
                        alt="India"
                        style={{
                          width: "20px",
                          height: "14px",
                          objectFit: "cover",
                        }}
                      />
                      +91
                    </Box>
                  </MenuItem>
                  <MenuItem value={102}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <img
                        src="/other_flag.png"
                        alt="Country 102"
                        style={{
                          width: "20px",
                          height: "14px",
                          objectFit: "cover",
                        }}
                      />
                      +102
                    </Box>
                  </MenuItem>
                  <MenuItem value={70}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <img
                        src="/other_flag2.png"
                        alt="Country 70"
                        style={{
                          width: "20px",
                          height: "14px",
                          objectFit: "cover",
                        }}
                      />
                      +70
                    </Box>
                  </MenuItem>
                </Select>
              }
              sx={{
                mt: "8px",
                flexGrow: "1",
                borderRadius: "8px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                borderRadius: "8px",
                fontSize: { xs: "10px", md: "16px" },
                fontWeight: "bold",
                textTransform: "none",
                padding: "10px 18px",
              }}
            >
              Change
            </Button>
          </Stack>
        </FormControl>
      </Box>
      <Box
        sx={{
          padding: { xs: "14px", md: "20px" },
          border: "1px solid #EBEEEF",
          backgroundColor: "rgba(250, 250, 250, 1)",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold" }}
        >
          Personal Information
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} mt={"30px"} spacing={7}>
          <Box textAlign={"center"}>
            <Avatar
              src={avatarSrc || "/person_filled_grey.svg"}
              sx={{ margin: "0 auto", height: 130, width: 130 }}
            />
            <Button
              variant="outlined"
              tabIndex={-1}
              component="label"
              role={undefined}
              sx={{
                mt: "20px",
                borderRadius: "8px",
                fontSize: { xs: "10px", md: "15px" },
                fontWeight: "bold",
                textTransform: "none",
                padding: { xs: "5px 20px", md: "10px 20px" },
              }}
            >
              <input
                type="file"
                accept="image/*"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: "1px",
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  whiteSpace: "nowrap",
                  width: "1px",
                }}
                onChange={handleAvatarChange}
              />{" "}
              Upload
            </Button>
          </Box>
          <Box>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
              <Typography
                sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
              >
                Name
              </Typography>
              <OutlinedInput
                id="user-name"
                type="tel"
                placeholder="Enter your name"
                aria-describedby="user-name"
                inputProps={{
                  "aria-label": "name",
                }}
                size={isMobile ? "small" : "medium"}
                sx={{
                  mt: "8px",
                  flexGrow: "1",
                  borderRadius: "8px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              <Typography
                sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
              >
                Email
              </Typography>
              <OutlinedInput
                id="user-email"
                type="email"
                placeholder="Enter your email"
                aria-describedby="user-email"
                inputProps={{
                  "aria-label": "email",
                }}
                size={isMobile ? "small" : "medium"}
                sx={{
                  mt: "8px",
                  flexGrow: "1",
                  borderRadius: "8px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              <Typography
                sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
              >
                Birth Date
              </Typography>
              <input
                ref={hiddenDateInputRef}
                type="date"
                onChange={(e) => setDate(e.target.value)}
                style={{
                  right: "30%",
                  position: "absolute",
                  opacity: 0,
                  pointerEvents: "none",
                  width: 0,
                  height: 0,
                }}
              />
              <OutlinedInput
                id="user-birth-date"
                type="tel"
                placeholder="DD / MM / YYYY"
                aria-describedby="user-birth-date"
                inputProps={{
                  "aria-label": "birth-date",
                }}
                value={
                  date
                    ? new Date(date).toLocaleDateString("en-GB") // convert to DD/MM/YYYY
                    : ""
                }
                readOnly
                size={isMobile ? "small" : "medium"}
                endAdornment={
                  <IconButton onClick={handleCalendarClick}>
                    <img src="/dob.svg" alt="dob_icon" />
                  </IconButton>
                }
                sx={{
                  mt: "8px",
                  flexGrow: "1",
                  borderRadius: "8px",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              <Typography
                sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
              >
                Nationality
              </Typography>

              <Select
                value={nationality}
                displayEmpty
                size={isMobile ? "small" : "medium"}
                renderValue={(selected) => {
                  if (selected === "") {
                    return (
                      <span style={{ color: "#9e9e9e" }}>
                        Select nationality
                      </span>
                    );
                  }
                  return selected;
                }}
                input={<OutlinedInput />}
                onChange={(e) => setNationality(e.target.value)}
                sx={{
                  borderRadius: "8px",
                  mt: "8px",
                }}
                IconComponent={ExpandMoreRoundedIcon}
              >
                <MenuItem disabled value="">
                  <em>Select nationality</em>
                </MenuItem>
                {nations.map((n) => (
                  <MenuItem value={n}>{n}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              <Typography
                sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#474847" }}
              >
                Gender
              </Typography>
              <RadioGroup
                row
                aria-labelledby="gender-label"
                name="gender-radio-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Stack>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          borderRadius: "8px",
          fontSize: { xs: "10px", md: "16px" },
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 18px",
        }}
      >
        Update Profile
      </Button>
    </Stack>
  );
};

export default MyProfile;
