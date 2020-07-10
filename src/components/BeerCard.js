import React, { useState } from 'react'
import { Modal, Button, Popconfirm } from 'antd';


export default function BeerCard(props) {
  const { beer, visible, showModal, handleCancel, servePint, handleEdit, handleDelete } = props
  const [editVisble, setEditVisble] = useState(false)
  const [name, setName] = useState(beer.name);
  const [brand, setBrand] = useState(beer.brand);
  const [desc, setDesc] = useState(beer.desc);
  const [img, setImg] = useState(beer.img);
  const [alc, setAlc] = useState(beer.alc);
  const [price, setPrice] = useState(beer.price);

  function handleKegform(event) {
    handleEdit({ name, brand, img, desc, price, alc, pints: beer.pints, id: beer.id }, beer.id);
    setEditVisble(false)
  }

  return (
    <div className="beer-card" >
      <img src={beer.img} alt={beer.name} />
      <h3>Name: {beer.name}</h3>
      <h4>Brand: {beer.brand}</h4>
      <Button type="primary" onClick={showModal}> See Details</Button>
      <Modal title={beer.name} visible={visible} onOk={handleCancel} onCancel={handleCancel}>
        <img src={beer.img} alt={beer.name} />
        <h3><strong>Name: </strong>{beer.name}</h3>
        <h4><strong>Brand: </strong>{beer.brand}</h4>
        <p><strong>Description: </strong><br /> {beer.desc}</p>
        <p><strong>Price:</strong> ${beer.price}</p>
        <p><strong>Alcohol Content:</strong> {beer.alc}%</p>
        <p><strong>Pints left: </strong>{beer.pints > 0 ? beer.pints : "Oops we're out!"}</p>
        <div className='buttons'>
          <Button className="secondary" onClick={() => servePint(beer.id)}>Serve Pint</Button>
          <Button type="primary" onClick={() => setEditVisble(true)}> Edit</Button>
          <Modal title="Edit this Keg!" visible={editVisble} onOk={handleKegform} okText="Edit" onCancel={() => setEditVisble(false)}>
            <form>
              <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Beer Name" />
              <input value={brand} onChange={e => setBrand(e.target.value)} type="text" name="brand" placeholder="Brand Name" />
              <textarea value={desc} onChange={e => setDesc(e.target.value)} type="text" name="desc" placeholder="Description" />
              <input value={img} onChange={e => setImg(e.target.value)} type="url" name="img" placeholder="Enter Image Url" />
              <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="price" placeholder="Price" />
              <input value={alc} onChange={e => setAlc(e.target.value)} type="number" name="alc" placeholder="Alchohol Content" />
            </form>
          </Modal>

          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={() => handleDelete(beer.id)}
            okText="Yes"
            cancelText="No"
          >
            <button className="delete">Delete</button>
          </Popconfirm>
        </div>
      </Modal>
    </div>
  )
}
