import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HerroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography mb={4} color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="17px"
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Cheackout the most effective exercise in the world
      </Typography>
      <Button
        sx={{ height: "50px" }}
        variant="contained"
        color="error"
        href="#exercise"
      >
        Explore Exercise
      </Button>
      <img
        src={HerroBannerImage}
        alt="banner-image"
        className="hero-banner-img"
      />
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          display: { lg: "block", xs: "none" },
          opacity: 0.15,
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
