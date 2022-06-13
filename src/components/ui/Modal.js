import React, { useState } from 'react';
import { Modal, Button } from 'antd';



const ModalPopup = (props) => {

  return (
    <>
      <Modal title="discount code" visible={props.isvisible} onCancel={props.onClose}>
          <p>{props.data.code}</p>
      </Modal>
    </>
  );
};

export default ModalPopup;