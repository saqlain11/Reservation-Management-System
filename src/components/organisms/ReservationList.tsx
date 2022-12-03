import { Table, Tag } from "antd";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import type { ColumnsType } from "antd/es/table/interface";
import { Reservation } from "models";

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
const ReservationList: React.FC = () => {
  const { filteredReservation, isLoading } = useAppSelector(
    (state) => state.Reservation
  );

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
