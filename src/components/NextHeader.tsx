import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import {NextHeaderContainer} from "../styles/commonStyles"
import { RunwayInfo, ActionSection } from "../styles/styles"

const Header: React.FC = () => {
  return (
    <NextHeaderContainer>
      <RunwayInfo>
        <Typography
          variant="body2"
          color="#9B9B9B"
          fontSize="14px"
          fontWeight={500}
          sx={{ borderRight: "1px solid #303030", paddingRight: "16px" }}
        >
          Projected runway:{" "}
          <Typography
            component="span"
            color="#E6E6E6"
            fontWeight="bold"
            fontSize="14px"
            marginLeft="5px"
          >
            18
          </Typography>
        </Typography>
        <Box display="flex" alignItems="center">
          <img src="/images/calendar.svg" alt="" />
          <Button
            variant="text"
            color="inherit"
            sx={{ textTransform: "none", color: "#80A3FF" }}
          >
            Starting date, Jan '22, 2023
          </Button>
          <img src="/images/Path.svg" alt="" />
        </Box>
      </RunwayInfo>

      <ActionSection>
        <Avatar
          sx={{
            bgcolor: "#403528",
            color: "#FFC47F",
            width: 32,
            height: 32,
            fontSize: 14,
          }}
        >
          BS
        </Avatar>
        <Avatar
          sx={{
            bgcolor: "#354C28",
            color: "#61D47A",
            width: 32,
            height: 32,
            fontSize: 14,
          }}
        >
          AT
        </Avatar>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#383838",
            color: "#ffffff",
            textTransform: "none",
            padding: "6px 16px",
            borderRadius: "8px",
            gap: "4px"
          }}
        > 
        <img src="/images/persons.svg" alt="" />
          Share
        </Button>
        <Box  display="flex" gap="15px"  sx={{ borderLeft: "1px solid #212121", paddingLeft: "16px" }}>
        <img src="/images/eye-cross.svg" alt="" />
        <img src="/images/refresh.svg" alt="" />
        <img src="/images/Settings.svg" alt="" />
        </Box>
      </ActionSection>
    </NextHeaderContainer>
  );
};

export default Header;
