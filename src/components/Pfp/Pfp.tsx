import React from "react";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image"

export const Pfp = () => (
  <Box h="220px" w="220px" pos="relative" boxShadow="lg" borderRadius="full">
    <StaticImage
      src="../../images/kyle.jpg"
      alt="Kyle"
      // layout="fill"
      objectFit="cover"
      className="pfp"
      draggable={false}
      placeholder="tracedSVG"
    />
  </Box>
);
