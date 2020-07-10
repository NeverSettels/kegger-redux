import React, { useState } from 'react'
import { Modal } from 'antd';
import { v4 } from 'uuid';
import PropTypes from "prop-types"

export default function Header(props) {
  const { handleOk, handleCancel, showModal, visible } = props

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('https://morebeer-web-8-pavinthewaysoftw.netdna-ssl.com/product_image/morebeer/500x500/32750.png');
  const [alc, setAlc] = useState("");
  const [price, setPrice] = useState("");


  function handleKegform(event) {
    handleOk({ name, brand, img, desc, price, alc, pints: 124, id: v4() });
  }

  return (
    <nav>
      <img src="/wine.png" alt="keg logo" />
      <h1>Kegger</h1>
      <button className="add-keg" onClick={showModal}> Add Keg</button>
      <Modal title="Add Keg" visible={visible} onOk={handleKegform} okText="Submit" onCancel={handleCancel}>
        <form>
          <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Beer Name" />
          <input value={brand} onChange={e => setBrand(e.target.value)} type="text" name="brand" placeholder="Brand Name" />
          <textarea value={desc} onChange={e => setDesc(e.target.value)} type="text" name="desc" placeholder="Description" />
          <input value={img} onChange={e => setImg(e.target.value)} type="url" name="img" placeholder="Enter Image Url" />
          <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="price" placeholder="Price" />
          <input value={alc} onChange={e => setAlc(e.target.value)} type="number" name="alc" placeholder="Alchohol Content" />
        </form>
      </Modal>
    </nav>
  )
}
Header.propTypes = {
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
  showModal: PropTypes.func,
  visible: PropTypes.bool
};