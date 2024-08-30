import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  chartData: {
    name: string;
    Gross_Profit: number;
    Balance: number;
    Cost: number;
    Revenue: number;
  }[];
  tableData: {
    key: string;
    description: string;
    amount: string;
    costRev: string;
    frequency: string;
    date: string;
    hidden: boolean;
  }[];
}

const initialState: DashboardState = {
  chartData: [],
  tableData: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setChartData(state, action: PayloadAction<DashboardState["chartData"]>) {
      state.chartData = action.payload;
    },
    setTableData(state, action: PayloadAction<DashboardState["tableData"]>) {
      state.tableData = action.payload;
    },
  },
});

export const { setChartData, setTableData } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
