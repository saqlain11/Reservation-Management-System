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
import { AREA, SHIFT, STATUS, UI_TEXT } from "helpers/constants";
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
                <Input placeholder="Name & Surname" maxLength={50} allowClear />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Status" name="status">
                <Select placeholder="Status" options={STATUS} allowClear />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Shift" name="shift">
                <Select placeholder="Shift" options={SHIFT} allowClear />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Area" name="area">
                <Select placeholder="Area" options={AREA} allowClear />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Date" name="date">
                <DatePicker style={{ width: "100%" }} allowClear />
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
              <Form.Item noStyle shouldUpdate>
                {({ getFieldsValue }) => {
                  const { fullName, shift, status, date, area } =
                    getFieldsValue();
                  const isFormValidated = !!(
                    fullName ||
                    shift ||
                    status ||
                    date ||
                    area
                  );
                  return (
                    <>
                      <Button
                        style={{ width: "49%" }}
                        type="primary"
                        htmlType="submit"
                        disabled={!isFormValidated}
                      >
                        {UI_TEXT.ALL_RESERVATIONS.CTA.FILTER}
                      </Button>
                      <Button
                        style={{ width: "49%" }}
                        htmlType="button"
                        onClick={() => {
                          clearFilter(form);
                        }}
                        disabled={!isFormValidated}
                      >
                        {UI_TEXT.ALL_RESERVATIONS.CTA.RESET}
                      </Button>
                    </>
                  );
                }}
              </Form.Item>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </Form>
  );
};
export default ReservationFilter;
