import { Collapse, DatePicker, Row, Col, Form, Select, Button } from "antd";
import { UI_TEXT } from "helpers/constants";

const ReservationFilter: React.FC = () => {
  const { Panel } = Collapse;
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel
        header={UI_TEXT.ALL_RESERVATIONS.HEADER.ADDITIONAL_FILTERS}
        key="1"
      >
        <Form layout="vertical">
          <Row gutter={10}>
            <Col span={12} sm={12} xs={24}>
              <Form.Item label="Status">
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
              <Form.Item label="Shift">
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
              <Form.Item label="Area">
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
              <Form.Item label="Date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Button style={{ width: "100%" }} type="primary">
                {UI_TEXT.ALL_RESERVATIONS.CTA.FILTER}
              </Button>
            </Col>
            <Col span={12} sm={12} xs={24}>
              <Button style={{ width: "100%" }}>
                {UI_TEXT.ALL_RESERVATIONS.CTA.RESET}
              </Button>
            </Col>
          </Row>
        </Form>
      </Panel>
    </Collapse>
  );
};
export default ReservationFilter;
