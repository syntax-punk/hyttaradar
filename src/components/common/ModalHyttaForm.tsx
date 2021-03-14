import React, { useState } from 'react';
import Modal from '../../hocs/Modal'

const ModalForm: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    price: 0,
    description: "",
  })

  const onInputChange = (value: any, key: string) => {
    
    setFormData(prev => ({ ...prev, [key]: value }));
  } 

  const onFormSubmit = (event: any) => {
    event.preventDefault();
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