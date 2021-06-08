import React, { useState } from "react";
import { AnyARecord } from "node:dns";
import { Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const EditSidebarWrapper = styled.div`
  width: 350px;
  min-height: 87.5%;
  padding: 40px;

  border: 0px solid #000000;
  background-color: white;
  border-radius: 30px;

  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  position: absolute;
`;

const OuterPad = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px;
`;

const EditSidebar = (props:any) => {
  const [userInfo, editUserInfo] = useState(props.userInfo)

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
              <Form.Control placeholder="Name" value={userInfo.name} onChange={e => {editUserInfo({...userInfo, name: e.target.value})}} />
            </Form.Group>

            <Form.Group controlId="header">
              <Form.Control placeholder="Header" value={userInfo.header} onChange={e => {editUserInfo({...userInfo, header: e.target.value})}}/>
            </Form.Group>

            <br></br>
            <br></br>

            <Form.Group controlId="phone">
              <Form.Control placeholder="Phone Number" value={userInfo.phoneNumber} onChange={e => {editUserInfo({...userInfo, phoneNumber: e.target.value})}}/>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control placeholder="Email (Optional)" value={userInfo.email} onChange={e => {editUserInfo({...userInfo, email: e.target.value})}}/>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Control placeholder="Address (Optional)" value={userInfo.address} onChange={e => {editUserInfo({...userInfo, address: e.target.value})}}/>
            </Form.Group>

            <Button onClick={(e) => {e.preventDefault(); props.editUserInfo(userInfo); }} variant="dark" type="submit" size="lg">
              Submit
            </Button>
          </Form>
        </div>
      </EditSidebarWrapper>
    </OuterPad>
  );
};

export default EditSidebar;
