import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import UserAddress from "./UserAddress";
import UserCompany from "./UserCompany";
import { PhoneOutlined } from "@ant-design/icons";
import { LinkOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { CardFooter } from "reactstrap";
import EditUserForm from "./EditUserModal";

const UserProfile = ({ user, deleteUser , handleUserUpdate}) => {
  const [editMode, setEditMode] = useState(false);
  const { company, address } = user;
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    /*setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setWebsite(user.website);*/
  };

  const handleSave = async (updatedUser) => {
    /*await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });*/
    console.log("2")
    handleUserUpdate(updatedUser);

    setEditMode(false);
    console.log("3")

    console.log(updatedUser.name);
    setName(updatedUser.name);
    setEmail(updatedUser.email);
    setPhone(updatedUser.phone);
    setWebsite(updatedUser.website);
    
    
  };
  

  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the state of the liked button
  };

  /*const handleUpdate = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "website":
        setWebsite(value);
        break;
      default:
        break;
    }
  };*/

  return (
    <Card className="mb-4">
      <CardImg
        top
        width="100%"
        src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        alt={user.name}
      />
      <CardBody>
        <CardTitle>
          <strong>Name:</strong> {name}
        </CardTitle>
        <CardSubtitle>
          <strong>Username:</strong> {user.username}
        </CardSubtitle>
        <CardSubtitle>
          <i className="bi bi-envelope-fill" aria-hidden="true"></i>
          <strong>Email: </strong>
          <a
            href={`mailto:${email}`}
            aria-label={`Send email to ${name}`}
          >
            {email}
          </a>
        </CardSubtitle>
        <CardSubtitle>
          <strong>Address:</strong> <UserAddress address={address} />
        </CardSubtitle>
        <CardSubtitle>
          <strong>
            <PhoneOutlined aria-label="Phone Number" />
          </strong>{" "}
          {phone}
        </CardSubtitle>
        <CardSubtitle>
          <strong>
            <LinkOutlined aria-label="Website" />
          </strong>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </CardSubtitle>
        <CardSubtitle>
          <strong>Company:</strong> <UserCompany company={company} />
        </CardSubtitle>
      </CardBody>
      <CardFooter style={{display: "flex", justifyContent: "space-between"}}>
        <Button
          type="primary"
          icon={liked ? <HeartFilled /> : <HeartOutlined />}
          size="large"
          onClick={handleLikeClick}
        />
        <Button
          icon={<EditOutlined />}
          size="large"
          onClick={handleEditClick}
        />
        <Button
          type="danger"
          icon={<DeleteOutlined />}
          size="large"
          onClick={() => deleteUser(user.id)}
        />
      </CardFooter>
      {editMode && (
        <EditUserForm
          visible={editMode}
          onCancel={handleCancel}
          user={user}
          isModalOpen={editMode}
          onSave={handleSave}
          //handleUpdate={handleUpdate}
        />
      )}
    </Card>
  );
};

export default UserProfile;
