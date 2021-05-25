import { Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const EditSidebarWrapper = styled.div`
  width: 350px;
  height: 87.5%;
  padding: 40px;

  border: 0px solid #000000;
  border-radius: 30px;

  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  position: fixed;
`;

const OuterPad = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px;
`;

const EditSidebar = () => {
  return (
    <OuterPad>
      <EditSidebarWrapper>
        <div>
          <Image
            src="http://download.seaicons.com/icons/mahm0udwally/all-flat/128/User-icon.png"
            rounded
          />

          <Form>
            <Form.Group controlId="name">
              <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="header">
              <Form.Control placeholder="Header" />
            </Form.Group>

            <br></br>
            <br></br>

            <Form.Group controlId="phone">
              <Form.Control placeholder="Phone Number" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control placeholder="Email (Optional)" />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Control placeholder="Address (Optional)" />
            </Form.Group>

            <Button variant="dark" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </div>
      </EditSidebarWrapper>
    </OuterPad>
  );
};

export default EditSidebar;
