import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

export const BreadcrumbSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 0px 35px 0px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "20px 0px 35px 0px",
  },
}));

export const FinancialSummary = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "#333333",
  padding: "8px 16px",
  borderRadius: "8px",
  color: "#ffffff",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#444444",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "auto",
  },

  [theme.breakpoints.down("md")]: {
    padding: "auto",
  },
}));

export const RunwayInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const ActionSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const SidebarContainer = styled(Box)({
  width: 240,
  height: "100vh",
  backgroundColor: "#111111",
  padding: "24px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRight: "1px solid #212121",
  flexShrink: 0,
});

export const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "black",
  minHeight: "100vh",
  overflow: "hidden",
  marginLeft: 240,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

export const ResponsiveTableContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  overflowX: "auto",
}));

export const TopBox = styled(Box)({
  paddingBottom: "2px",
  borderBottom: "1px solid #252525",
  textAlign: "center",
});

export const Logo = styled("img")({
  width: "192px",
  height: "20px",
  gap: "24px",
  marginBottom: "10px",
});

export const ScenarioBox = styled(Box)({
  padding: "16px 30px",
});

export const ScenarioTitle = styled("div")({
  color: "#9B9B9B",
  fontSize: "12px",
  fontWeight: 400,
});

export const FooterBox = styled(Box)({
  padding: "16px 30px",
  borderTop: "1px solid #252525",
});

export const FooterItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  gap: "10px",
});

export const FooterText = styled(Typography)({
  color: "#9B9B9B",
  fontSize: "12px",
});

export const UserCard = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#212121",
  padding: "12px 16px",
  borderRadius: "8px",
  cursor: "pointer",
});

export const UserIcon = styled("img")({
  width: "24px",
  height: "24px",
  marginRight: "12px",
});

export const UserInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const UserName = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 500,
});

export const UserRole = styled(Typography)({
  color: "#9B9B9B",
  fontSize: "12px",
});
