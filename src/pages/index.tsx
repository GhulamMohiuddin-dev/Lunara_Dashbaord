// src/pages/index.tsx
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chart from "../components/Chart";
import DataTable from "../components/DataTable";
import NextHeader from "../components/NextHeader";
import { MainContent } from "../styles/styles";

const DashboardPage: React.FC = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <MainContent>
        <Header />
        <Box>
          <NextHeader />
        </Box>
        <Box style={{ padding: "15px" }}>
          <Chart />
        </Box>
        <Box mt={2} style={{ paddingBottom: "50px" }}>
          <DataTable />
        </Box>
      </MainContent>
    </Box>
  );
};

export default DashboardPage;
