import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import * as api from "../../Services/Api.service";
import AddProductModal from "./AddProductModal";
import styles from "./ProductList.module.css";
import boxImage from "../../Asset/box.png";

function ProductList({ history }) {
  const isMounted = useRef(false);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    isMounted.current = true;
    api
      .getProducts()
      .then((res) => res.json())
      .then((products) => isMounted.current && setProducts(products));
    return () => (isMounted.current = false);
  }, []);
  return (
    <Container className={styles.container}>
      <div style={{ margin: "2em 0 1em" }}>
        <span style={{ fontSize: "25px" }}>Product</span>
        <span
          style={{ fontSize: "28px", fontWeight: "bold", marginLeft: "8px" }}
        >
          List
        </span>
        <Button
          style={{ float: "right" }}
          onClick={() => setIsModalVisible(true)}
        >
          Add new product
        </Button>
      </div>
      <hr />
      {products.length === 0 && (
        <div style={{ margin: "auto", display: "block", textAlign: "center" }}>
          Add new products...
        </div>
      )}
      {products.map((item) =>
        renderRow(
          item,
          (id) => {
            api.removeProduct(id).then((res) => {
              if (res.ok)
                isMounted.current &&
                  setProducts(products.filter((v) => v !== item));
            });
          },
          (id) => {
            const product = products.find((v) => v._id === id);
            if (product) {
              setEditProduct(product);
              setIsModalVisible(true);
            }
          }
        )
      )}
      <AddProductModal
        isVisible={isModalVisible}
        product={editProduct}
        onOk={(product) => {
          setIsModalVisible(false);
          editProduct
            ? api.editProduct(product).then((res) => {
                if (res.ok)
                  api
                    .getProducts()
                    .then((res) => res.json())
                    .then(
                      (products) => isMounted.current && setProducts(products)
                    );
              })
            : api.addProduct(product).then((res) => {
                if (res.ok)
                  api
                    .getProducts()
                    .then((res) => res.json())
                    .then(
                      (products) => isMounted.current && setProducts(products)
                    );
              });
          setEditProduct();
        }}
        onCancel={() => {
          setIsModalVisible(false);
          setEditProduct();
        }}
      />
    </Container>
  );
}

function renderRow({ _id, title, buyed, price, color }, onRemove, onEdit) {
  return (
    <div key={_id} style={{ marginBottom: "1em" }}>
      <Card>
        <Card.Header>
          <Image
            style={{ float: "left", marginRight: "1em" }}
            src={boxImage}
            rounded
            width="90px"
          />
          <Form.Group controlId="formName" style={{ float: "left" }}>
            <h5>{title || "No name"}</h5>
            Price: {price ? price.price : "-"}
          </Form.Group>
          <Button
            variant="danger"
            form="form"
            type="submit"
            style={{ float: "right" }}
            onClick={() => onRemove(_id)}
          >
            Remove
          </Button>
          <Button
            variant="primary"
            form="form"
            type="submit"
            style={{ float: "right", marginRight: "0.5em" }}
            onClick={() => onEdit(_id)}
          >
            Edit
          </Button>
        </Card.Header>
        <Card.Body>
          <Form id="form">
            <Form.Row>
              <Form.Group as={Col} controlId="formCount">
                <Form.Label>Count</Form.Label>
                <Form.Control
                  readOnly
                  type="number"
                  placeholder="Count"
                  value={buyed}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formColorA">
                <Form.Label>Colors</Form.Label>
                <Form.Control
                  readOnly
                  type="text"
                  placeholder="Color A"
                  value={
                    color
                      ? color.color1 + ", " + color.color2 + ", " + color.color3
                      : "-"
                  }
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductList;
