import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { BreadcrumbSection, FinancialSummary } from "../styles/styles"
import {TopHeaderContainer} from "../styles/commonStyles"
import withPermissions from '../HOC/WithPermissions';



function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const breadcrumbs = [
  <img src="/images/home_header.svg" />,
  <Link
    underline="hover"
    key="2"
    color="#6A6A6A"
    fontSize="12px"
    fontWeight="400"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
  >
    Runway
  </Link>,
  <Typography
    key="3"
    sx={{ color: "#ffffff", fontSize: "12px", fontWeight: "400", lineHeight: "21px" }}
  >
    Profit & Loss +Cash
  </Typography>,
];

const Header: React.FC = () => {
  return (
    <TopHeaderContainer>
      <BreadcrumbSection>
        <Stack spacing={2}>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ color: "#B4B4B4" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BreadcrumbSection>

      <FinancialSummary>
        <Box display="flex" alignItems="center" gap="10px">
          <img src="/images/eye.svg" />
          <Typography variant="body2" color="#E6E6E6" fontSize="14px">
            354,575.00
          </Typography>
        </Box>
        <Typography variant="body2" color="#4B4B4B">
          |
        </Typography>
        <Box display="flex" alignItems="center" gap="10px">
          <Typography variant="body2" color="#E6E6E6" fontSize="14px">
            1.5 years
          </Typography>
          <img src="/images/Group.svg" />
        </Box>
      </FinancialSummary>
    </TopHeaderContainer>
  );
};

export default withPermissions(Header,'Header');
