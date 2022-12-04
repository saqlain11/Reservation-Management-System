import {
  Collapse,
  DatePicker,
  Row,
  Col,
  Form,
  Select,
  Button,
  Input,
  FormInstance,
} from "antd";
import { UI_TEXT } from "helpers/constants";
import { FilterReservation } from "models";
interface ReservationFilterProps {
  onReservationFilter: (data: FilterReservation) => void;
  clearFilter: (form: FormInstance) => void;
}
const ReservationFilter: React.FC<ReservationFilterProps> = ({
  onReservationFilter,
  clearFilter,
}) => {
  const { Panel } = Collapse;
  const [form] = Form.useForm();
  return (
    <Form
      name="reservationFilters"
      layout="vertical"
      onFinish={onReservationFilter}
      form={form}
    >
      <Collapse ghost defaultActiveKey={["1"]}>
        <Panel
          header={UI_TEXT.ALL_RESERVATIONS.HEADER.ADDITIONAL_FILTERS}
          key="1"
        >
          <Row gutter={10}>
            <Col span={12} sm={12} xs={24}>
              <Form.Item
                label="Name & Surname"
                name="fullName"
                shouldUpdate={true}
              >
                <Input placeholder="Name & Surname" maxLength={50} />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Status" name="status">
                <Select
                  placeholder="Status"
                  options={[
                    {
                      value: "CONFIRMED",
                      label: "Confirmed",
                    },
                    {
                      value: "NOT CONFIRMED",
                      label: "Not Confirmed",
                    },

                    {
                      value: "SEATED",
                      label: "Seated",
                    },
                    {
                      value: "CHECKED OUT",
                      label: "Checked out",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Shift" name="shift">
                <Select
                  placeholder="Shift"
                  options={[
                    {
                      value: "BREAKFAST",
                      label: "Breakfast",
                    },
                    {
                      value: "LUNCH",
                      label: "Lunch",
                    },
                    {
                      value: "DINNER",
                      label: "Dinner",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Area" name="area">
                <Select
                  placeholder="Area"
                  options={[
                    {
                      value: "BAR",
                      label: "Bar",
                    },
                    {
                      value: "MAIN ROOM",
                      label: "Main Room",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Date" name="date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              span={12}
              sm={12}
              xs={24}
            >
              <Button style={{ width: "49%" }} type="primary" htmlType="submit">
                {UI_TEXT.ALL_RESERVATIONS.CTA.FILTER}
              </Button>
              <Button
                style={{ width: "49%" }}
                htmlType="button"
                onClick={() => {
                  clearFilter(form);
                }}
              >
                {UI_TEXT.ALL_RESERVATIONS.CTA.RESET}
              </Button>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </Form>
  );
};
export default ReservationFilter;
