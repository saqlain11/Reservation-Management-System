import React, { useEffect } from "react";
import { allReservation } from "state-management/actions";
import { useAppDispatch } from "hooks";
import {
  FormInstance,
  Layout,
  ReservationFilter,
  ReservationList,
  Typography,
} from "components";
import { UI_TEXT } from "helpers/constants";
import { FilterReservation } from "models";
import { applyReservationFilter, clearReservsationFilter } from "state-management/reducers";
const AllReservation: React.FC = () => {
  const { Title } = Typography;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(allReservation());
  }, []);
  const onReservationFilter = (reservationFilters: FilterReservation) => {
    if (reservationFilters.date)
      reservationFilters = {
        ...reservationFilters,
        date: new Date(reservationFilters.date).toLocaleDateString("en-GB"),
      };
    dispatch(applyReservationFilter(reservationFilters));
  };

  const clearFilter = (form: FormInstance) => {
    form.resetFields();
    dispatch(clearReservsationFilter());
  };

  return (
    <Layout style={{ height: "100vh", padding: 10 }}>
      <Title level={2}>{UI_TEXT.COMMON.ALL_RESERVATIONS}</Title>
      <ReservationFilter
        onReservationFilter={onReservationFilter}
        clearFilter={clearFilter}
      />
      <ReservationList />
    </Layout>
  );
};
export default AllReservation;
