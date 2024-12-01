"use client";
import { ConfigProvider, Select, Table } from "antd";
import { useState } from "react";
const { Option } = Select;

const MyTables = () => {
  const users = [
    {
      slNo: 1,
      name: "Marilyn Terry",
      address: "123 Main Street New York, NY 10001",
      email: "marilyn.terry@example.com",
      status: "Paid",
    },
    {
      slNo: 2,
      name: "John Doe",
      address: "456 Elm Avenue Los Angeles, CA",
      email: "john.doe@example.com",
      status: "General",
    },
    {
      slNo: 3,
      name: "Alice Johnson",
      address: "789 Oak Lane Chicago, IL 60611",
      email: "alice.johnson@example.com",
      status: "Paid",
    },
    {
      slNo: 4,
      name: "Michael Smith",
      address: "567 Pine Road Miami, FL 33133",
      email: "michael.smith@example.com",
      status: "Paid",
    },
    {
      slNo: 5,
      name: "Sophia Brown",
      address: "890 Cedar Street Seattle, WA",
      email: "sophia.brown@example.com",
      status: "General",
    },
    {
      slNo: 6,
      name: "William Lee",
      address: "678 Willow Avenue San Francisco, CA",
      email: "william.lee@example.com",
      status: "General",
    },
    {
      slNo: 7,
      name: "Olivia Rodriguez",
      address: "345 Birch Street Boston, MA",
      email: "olivia.rodriguez@example.com",
      status: "General",
    },
    {
      slNo: 8,
      name: "Ethan Wilson",
      address: "234 Maple Drive Austin, TX",
      email: "ethan.wilson@example.com",
      status: "General",
    },
    {
      slNo: 9,
      name: "Ava Martinez",
      address: "789 Pine Street Portland, OR",
      email: "ava.martinez@example.com",
      status: "General",
    },
    {
      slNo: 10,
      name: "Liam Garcia",
      address: "456 Cedar Lane Denver, CO",
      email: "liam.garcia@example.com",
      status: "General",
    },
  ];

  const columns = [
    {
      title: "Sl No",
      dataIndex: "slNo",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "E-mail",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedValue, setSelectedValue] = useState(null);
  const onSelectChange = (value) => {

    setSelectedValue(value)
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#F88D5899",
              colorBgContainer: "#fffaf5",
              colorText: "#0C0C0C",
              borderColor: "#fffaf5",
              headerColor: "#0C0C0C",
              fontSize: 18,
              footerColor: "#fffaf5",
              // marginXXS: 4,
              colorLinkActive: "#fffaf5",
              headerSplitColor: "#0C0C0C",
            },
          },
        }}
      >
        <Table columns={columns} dataSource={users} scroll={{ x: "100%" }} />
      </ConfigProvider>

      <Select
            className="!border-none !ring-0 !outline-none !text-2xl !h-12  !w-auto "
            placeholder="Select a Month"
            style={{ width: 200 }}
            onChange={onSelectChange}
            value={selectedValue}
          >
            {/* {months.map((month, index) => (
              <Option key={index} value={month}>
                {month}
              </Option>
            ))} */}
              {months.map((month, index) => (
              <Option key={index} value={month}>
                {month}
              </Option>
            ))}
          </Select>
    </div>
  );
};

export default MyTables;
