import React from "react";
import { Img } from "@chakra-ui/react";
import Golfincorp from "../../../assets/imgs/Frame.png";
const Logo = ({ ...props }) => {
  return <Img src={Golfincorp} {...props} />;
};

export default Logo;
