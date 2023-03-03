import React from "react";
import { Form } from "@ant-design/compatible";
import { Modal, Input } from "antd";

const EditUserModal = ({ visible, onCancel, form, user, onSave }) => {
  const { getFieldDecorator } = form;
console.log(form);
  const handleSubmit = (event) => {
    console.log("1");
    event.preventDefault();
    form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        onSave({
          ...user,
          ...values,
        });
        onCancel();
      }
    });
  };

  return (
    <Modal
      open={visible}
      title="Edit User"
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Form layout="vertical">
        <Form.Item label="Name">
          {getFieldDecorator("name", {
            initialValue: user.name,
            rules: [{ required: true, message: "Please input the name!" }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            initialValue: user.email,
            rules: [{ required: true, message: "Please input the email!" }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone">
          {getFieldDecorator("phone", {
            initialValue: user.phone,
            rules: [{ required: true, message: "Please input the phone!" }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Website">
          {getFieldDecorator("website", {
            initialValue: user.website,
            rules: [{ required: true, message: "Please input the website!" }],
          })(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

const EditUserForm = Form.create({ name: "edit_user_form" })(EditUserModal);

export default EditUserForm;
