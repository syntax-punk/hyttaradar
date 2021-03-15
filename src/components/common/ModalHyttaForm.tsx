import React, { useState } from 'react';
import Modal from '../../hocs/Modal'
import { useModal } from '../../contexts/ModalContext';
import { DataItem } from './DataBox';

const ModalForm: React.FC<{ onDataSaved: (dataItem: DataItem) => void }> = ({ onDataSaved }) => {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    price: 0,
    description: "",
  });

  const { isModalActive, toggleModal } = useModal();

  const onInputChange = (value: any, key: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  } 

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    const payload ={
      ...formData,
      imageUrl: "https://source.unsplash.com/320x240/?villa,hotel,house,vacation",
      googleMapsUrl: "https://www.google.com/maps/@63.5349094,8.9258803,17z",
      rank: 5,
      price: `${formData.price} NOK`
    }
    fetch("http://localhost:9200/cabins", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data: DataItem) => {
        console.log("created > ", data);
        onDataSaved(data)
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => toggleModal())
  }

  return (
    <Modal>
      <section className="hytta-add-form">
        <form onSubmit={onFormSubmit}>
          <span className="image-drop"></span>
          <input 
            type="text" 
            name="name" 
            id="name-input" 
            value={formData.name}
            placeholder="Enter name" 
            onChange={(e) => onInputChange(e.target.value, "name")}/>
          <input 
            type="text" 
            name="address" 
            id="address-input" 
            value={formData.address}
            placeholder="Enter address" 
            onChange={(e) => onInputChange(e.target.value, "address")} />
          <input 
            type="number" 
            name="price" 
            id="price-input" 
            value={formData.price}
            placeholder="Enter price" 
            onChange={(e) => onInputChange(+e.target.value, "price")} />
          <textarea 
            rows={16} 
            cols={16} 
            name="description" 
            id="description-input" 
            placeholder="Enter description" 
            value={formData.description}
            onChange={(e) => onInputChange(e.target.value, "description")} />
          <button type='submit' className="round-button">Save</button>
        </form>
      </section>
    </Modal>
  )
}

export default ModalForm;