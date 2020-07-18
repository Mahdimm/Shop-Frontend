import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import * as api from "../../Services/Api.service";
import styles from "./LoginPassword.module.css";

function LoginPassword(props) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [error, setError] = useState("");

  function onInputChange(e) {
    setLoginInfo({
      ...loginInfo,
      [e.target.id]: e.target.value,
    });
  }

  function onLoginClick() {
    if (isLoginLoading) return;
    setIsLoginLoading(true);
    api
      .login(loginInfo)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("jwt", json.token);
        api.setJwt(json.token);
      })
      .finally(() => setIsLoginLoading(false))
      .then(() => props.history.go(0))
      .catch((res) => {
        switch (res.status) {
          case 401:
            setError("Username or password is invalid");
            break;
          default:
            setError("Login failed");
            break;
        }
      });
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Alert hidden={!error} style={{ textAlign: "center" }} variant="danger">
          {error}
        </Alert>
        <Card.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                id="email"
                type="text"
                placeholder="Username"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={onInputChange}
              />
            </Form.Group>
            <Button
              className={styles.btnSignIn}
              variant="primary"
              type="submit"
              onClick={onLoginClick}
            >
              {isLoginLoading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Login"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginPassword;
