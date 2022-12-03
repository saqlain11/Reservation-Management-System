import { Result, Button, Space } from "components";
import { UI_TEXT } from "helpers/constants";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Space
      style={{ width: "100vw", height: "100vh", justifyContent: "center" }}
    >
      <Result
        status="404"
        title={UI_TEXT.PAGE_NOT_FOUND.STATUS}
        subTitle={UI_TEXT.PAGE_NOT_FOUND.SUBTITLE}
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            {UI_TEXT.PAGE_NOT_FOUND.BACK_TO_PAGE}
          </Button>
        }
      />
    </Space>
  );
};

export default NotFound;
