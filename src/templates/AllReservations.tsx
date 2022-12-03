import React, { useEffect } from "react";
import { allReservation } from "state-management/actions";
import { useAppDispatch } from "hooks";
import {
  Divider,
  Layout,
  ReservationFilter,
  ReservationList,
  Typography,
} from "components";
import { UI_TEXT } from "helpers/constants";
const AllReservation: React.FC = () => {
  const { Title } = Typography;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(allReservation());
  }, []);
  return (
    <Layout style={{ height: "100vh", padding: 10 }}>
      <Title level={2}>{UI_TEXT.COMMON.ALL_RESERVATIONS}</Title>
      <ReservationFilter />
      <ReservationList />
    </Layout>
  );
};
export default AllReservation;
