// src/ShopOwnerList.js
import React from 'react';
import './ShopOwnerList.css';

const ShopOwnerList = ({ shopOwners, fetchShopOwners, setEditingShopOwner }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/shopownerservices/${id}`, { method: 'DELETE' });
      fetchShopOwners();
    } catch (error) {
      console.error('Error deleting shop owner:', error);
    }
  };

  return (
    <div className="shopowner-list-container">
      <h2>Shop Owner Records</h2>
      {shopOwners.length === 0 ? (
        <p className="no-data">No shop owners available.</p>
      ) : (
        <div className="shopowner-grid">
          {shopOwners.map((owner) => (
            <div key={owner.id} className="shopowner-card">
              <div className="shopowner-details">
                <h3>{owner.ownerName}</h3>
                <p><strong>Shop:</strong> {owner.shopName}</p>
                <p><strong>Email:</strong> {owner.email}</p>
                <p><strong>Phone:</strong> {owner.phone}</p>
                <p><strong>Mall:</strong> {owner.mallName}</p>
                <p><strong>Category:</strong> {owner.shopCategory}</p>
              </div>
              <div className="card-buttons">
                <button className="edit-btn" onClick={() => setEditingShopOwner(owner)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(owner.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopOwnerList;
