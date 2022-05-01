import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  auth.onAuthStateChanged((user) => {
    console.log(user);
  });

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng google
          </Button>

          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
