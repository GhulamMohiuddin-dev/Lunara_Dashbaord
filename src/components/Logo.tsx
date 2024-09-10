import React from "react";
import { Box } from "@mui/material";
import LogoIcon from "../../public/images/Lunara-logo.svg";
import withPermissions from '../HOC/WithPermissions';


const Logo = () => {
  return (
    <Box height={70} sx={{display: "flex", justifyContent: "center", m: 2}}>
      <img src={LogoIcon} alt="luna" title="luna" />
    </Box>
  );
};

export default withPermissions(Logo,'Logo');
