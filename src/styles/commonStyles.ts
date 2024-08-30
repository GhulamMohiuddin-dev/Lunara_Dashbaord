import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#111111",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #212121",
  justifyContent: "space-between",
  boxSizing: "border-box",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "auto",
    flexDirection: "column",
  },

  [theme.breakpoints.down("md")]: {
    padding: "auto",
    flexDirection: "column",
  },
}));

export const TopHeaderContainer = styled(HeaderContainer)({
  padding: "16px 40px 16px 40px",
});

export const NextHeaderContainer = styled(HeaderContainer)({
  padding: "8px 40px 8px 40px",
});
