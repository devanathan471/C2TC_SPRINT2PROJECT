// src/ShopOwnerForm.js
import React, { useState, useEffect } from 'react';
import './ShopOwnerForm.css';

const ShopOwnerForm = ({ fetchShopOwners, editingShopOwner, setEditingShopOwner }) => {
  const [ownerName, setOwnerName] = useState('');
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mallName, setMallName] = useState('');
  const [shopCategory, setShopCategory] = useState('');

  useEffect(() => {
    if (editingShopOwner) {
      setOwnerName(editingShopOwner.ownerName);
      setShopName(editingShopOwner.shopName);
      setEmail(editingShopOwner.email);
      setPhone(editingShopOwner.phone);
      setMallName(editingShopOwner.mallName);
      setShopCategory(editingShopOwner.shopCategory);
    } else {
      setOwnerName('');
      setShopName('');
      setEmail('');
      setPhone('');
      setMallName('');
      setShopCategory('');
    }
  }, [editingShopOwner]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('handleSubmit called');  
  const shopOwner = { ownerName, shopName, email, phone, mallName, shopCategory };

  // Add this line right here to see what's being submitted
  console.log('Submitting:', shopOwner);

  try {
    if (editingShopOwner) {
      await fetch(`http://localhost:8080/shopownerservices/${editingShopOwner.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shopOwner),
      });
    } else {
      await fetch('http://localhost:8080/shopownerservices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shopOwner),
      });
    }

    fetchShopOwners();
    setEditingShopOwner(null);
    setOwnerName('');
    setShopName('');
    setEmail('');
    setPhone('');
    setMallName('');
    setShopCategory('');
  } catch (error) {
    console.error('Error saving shop owner:', error);
  }
};


  return (
    <div className="form-container">
      <h2>{editingShopOwner ? 'Edit Shop Owner' : 'Add Shop Owner'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder="Owner Name" required />
        <input type="text" value={shopName} onChange={(e) => setShopName(e.target.value)} placeholder="Shop Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <input type="text" value={mallName} onChange={(e) => setMallName(e.target.value)} placeholder="Mall Name" required />
        <input type="text" value={shopCategory} onChange={(e) => setShopCategory(e.target.value)} placeholder="Shop Category" required />
        <button type="submit">{editingShopOwner ? 'Update' : 'Add'} Shop Owner</button>
      </form>
    </div>
  );
};

export default ShopOwnerForm;
