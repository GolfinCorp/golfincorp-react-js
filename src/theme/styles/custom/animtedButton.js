import { defineStyleConfig } from "@chakra-ui/react";

const animated_button_container = defineStyleConfig({
  baseStyle: {
    display: "flex",
    position: "absolute",
    w: "100vw",
    left: 0,
    bottom: "-30px",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
});

const animated_button = defineStyleConfig({
  baseStyle: {
    w: "60px",
    h: "60px",
    display: "flex",
    border: "4px solid",
    borderColor: "#F0F0F0",
    bgGradient: "linear-gradient(45deg, #181816 0%, #3F3F3F 96.54%)",
    boxShadow: "lg",
    transform: "rotate(45deg)",
    justifyContent: "center",
    alignItems: "center",
    _hover: { cursor: "pointer", boxShadow: "dark-lg" },
  },
});

const animated_icon = defineStyleConfig({
  baseStyle: {
    color: "brand.primary",
    transform: "rotate(-45deg)",
    boxSize: "30px",
  },
});

const animated_button_module = {
  animated_button_container,
  animated_button,
  animated_icon,
};

export default animated_button_module;
