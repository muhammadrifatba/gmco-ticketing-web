import { Image } from 'antd';
import React from 'react'
import ModalImage from "react-modal-image";
import img from '../../images/herotemp.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function testmodal() {
  return (
    <div>
      <div>testmodal</div>
      <div>
        <ModalImage
          large={img}
          alt="Harga"
        />
        <Popup trigger={<button> Trigger</button>} position="right center">
          <img  style="width=1px" src={img}></img>
        </Popup>
      </div>
    </div>
  )
}
