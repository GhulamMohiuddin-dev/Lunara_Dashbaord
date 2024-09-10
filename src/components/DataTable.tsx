import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../state/dashboardSlice";
import { RootState } from "../state/store";
import withPermissions from '../HOC/WithPermissions';
import { Table, Checkbox, Space, Button, DatePicker } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/lib/table";
import { initialData } from "../dummyData/index";
import {ResponsiveTableContainer } from "../styles/styles"

interface DataType {
  key: string;
  description: string;
  amount: string;
  costRev: string;
  frequency: string;
  date: string;
  hidden: boolean;
}

const CustomTable: React.FC = () => {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState<DataType[]>(initialData);
  useEffect(() => {
    dispatch(setTableData(initialData));
  }, [dispatch]);
  const tableData = useSelector(
    (state: RootState) => state.dashboard.chartData
  );
  const handleToggleVisibility = (key: string) => {
    setDataSource(
      dataSource.map((item) =>
        item.key === key ? { ...item, hidden: !item.hidden } : item
      )
    );
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      width: 50,
      render: (_, record) => (
        <div style={{ paddingLeft: "22px" }}>
          <Checkbox defaultChecked />
        </div>
      ),
    },
    {
      title: (
        <Space>
          <span>Entry description</span>
          <img src={"/images/info.svg"} alt="Info Icon" />
        </Space>
      ),
      dataIndex: "description",
      key: "description",
      width: 300,
    },
    {
      title: (
        <Space>
          <img src={"/images/info.svg"} alt="Info Icon" />
          <span>Amount (PKR)</span>
          <EyeOutlined />
        </Space>
      ),
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (text, record) => (
        <Space>
          <span>{record.hidden ? "**********" : text}</span>
          <Button
            type="link"
            icon={record.hidden ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            onClick={() => handleToggleVisibility(record.key)}
          />
        </Space>
      ),
    },
    {
      title: (
        <Space>
          <span>Cost/Rev</span>
          <img src={"/images/info.svg"} alt="Info Icon" />
        </Space>
      ),
      dataIndex: "costRev",
      key: "costRev",
      width: 100,
      render: (text, record) => (
        <Space>
          <span>{text}</span>
          <Button
            type="link"
            icon={<img src={"/images/Vector.svg"} alt="My Icon" />}
          />
        </Space>
      ),
    },
    {
      title: (
        <Space>
          <span>Frequency</span>
          <img src={"/images/info.svg"} alt="Info Icon" />
        </Space>
      ),
      dataIndex: "frequency",
      key: "frequency",
      width: 100,
      render: (text, record) => (
        <Space>
          <span>{text}</span>
          <Button
            type="link"
            icon={<img src={"/images/Vector.svg"} alt="My Icon" />}
          />
        </Space>
      ),
    },
    {
      title: (
        <Space>
          <span>Application date</span>
          <img src={"/images/info.svg"} alt="Info Icon" />
        </Space>
      ),
      dataIndex: "date",
      key: "date",
      width: 150,
      render: (text, record) => (
        <Space>
          <span>{text}</span>
          <Button type="link" icon={<DatePicker disabled />} />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (_, record) => (
        <Button
          type="link"
          icon={<img src={"/images/delete.svg"} alt="My Icon" />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  return (
    <ResponsiveTableContainer>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size="small"
        scroll={{ x: true }}
      />
</ResponsiveTableContainer>  );
};

export default withPermissions(CustomTable,"CustomTable");
