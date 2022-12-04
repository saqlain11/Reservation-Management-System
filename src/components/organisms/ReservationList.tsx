import { Table, Tag, Input, Space, Button } from "antd";
import useAppSelector from "hooks/useAppSelector";
import React, { useRef } from "react";
import type { ColumnsType, ColumnType } from "antd/es/table/interface";
import type { InputRef } from "antd";
import { Reservation } from "models";
import { SearchOutlined } from "@ant-design/icons";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { UI_TEXT } from "helpers/constants";
import { color } from "theme";

const ReservationList: React.FC = () => {
  const { filteredReservation, isLoading } = useAppSelector(
    (state) => state.Reservation
  );
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (confirm: (param?: FilterConfirmProps) => void) => {
    confirm();
  };

  const handleReset = (
    clearFilters: () => void,
    confirm: (param?: FilterConfirmProps) => void
  ) => {
    clearFilters();
    confirm();
  };
  const searchCustomer = (): ColumnType<Reservation> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder="Search Customer"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(confirm)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 100 }}
          >
            {UI_TEXT.ALL_RESERVATIONS.CTA.SEARCH}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{ width: 100 }}
          >
            {UI_TEXT.ALL_RESERVATIONS.CTA.RESET}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => {
      return (
        <SearchOutlined
          style={{ color: filtered ? color.ICON.BLUE : undefined }}
        />
      );
    },
    onFilter: (value, record) => {
      return `${record["customer"].firstName} ${record["customer"].lastName}}`
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase());
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const reservationColumns: ColumnsType<Reservation> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (first, second) => first.id - second.id,
      ellipsis: true,
    },
    {
      title: "First & Last Name ",
      dataIndex: "customer",
      key: "customer",
      render: (customer) => `${customer.firstName} ${customer.lastName}`,
      sorter: (first, second) =>
        first.customer.firstName.localeCompare(second.customer.firstName),
      ...searchCustomer(),
      ellipsis: true,
    },

    {
      title: "Start Date",
      dataIndex: "start",
      key: "start",
      ellipsis: true,
    },
    {
      title: "End Date",
      dataIndex: "end",
      key: "end",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color="blue">{status}</Tag>,
      ellipsis: true,
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
      render: (shift) => <Tag color="green">{shift}</Tag>,
      ellipsis: true,
    },

    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      render: (area) => <Tag color="orange">{area}</Tag>,
      ellipsis: true,
    },
    {
      title: "# of Seats",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (first, second) => first.quantity - second.quantity,
      ellipsis: true,
    },
  ];

  return (
    <Table
      loading={isLoading}
      rowKey="id"
      dataSource={filteredReservation}
      columns={reservationColumns}
      pagination={false}
      scroll={{ x: 1200, y: 500 }}
    ></Table>
  );
};
export default ReservationList;
