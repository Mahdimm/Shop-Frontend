import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import boxImage from "../../Asset/box.png";

function AddProductModal({ product, isVisible, onOk, onCancel }) {
  const pro = { ...product };
  const onSubmit = (event) => {
    event.preventDefault();
    pro.title = event.currentTarget.formName.value;
    pro.price = {
      price: event.currentTarget.formPrice.value,
    };
    pro.buyed = event.currentTarget.formCount.value;
    pro.color = {
      color1: event.currentTarget.formColorA.value,
      color2: event.currentTarget.formColorB.value,
      color3: event.currentTarget.formColorC.value,
    };
    onOk(pro);
  };
  return (
    <Modal show={isVisible} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          style={{ margin: "auto", display: "block", padding: "1em" }}
          src={boxImage}
          rounded
          width="220px"
        />
        <Form id="myform" onSubmit={onSubmit} style={{ float: "left" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                defaultValue={pro.title}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                defaultValue={pro.price && pro.price.price}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formCount">
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Count"
                defaultValue={pro.buyed}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formColorA">
              <Form.Label>Color A</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color A"
                defaultValue={pro.color && pro.color.color1}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formColorB">
              <Form.Label>Color B</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color B"
                defaultValue={pro.color && pro.color.color2}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formColorC">
              <Form.Label>Color C</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color C"
                defaultValue={pro.color && pro.color.color3}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="myform">
          {product ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProductModal;
