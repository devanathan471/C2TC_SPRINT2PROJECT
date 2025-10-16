import React, { useState, useEffect } from 'react';
import ShopOwnerForm from './components/ShopOwnerForm';
import ShopOwnerList from './components/ShopOwnerList';

const App = () => {
  const [shopOwners, setShopOwners] = useState([]);
  const [editingShopOwner, setEditingShopOwner] = useState(null);

  const fetchShopOwners = async () => {
  try {
    const response = await fetch('http://localhost:8080/shopownerservices');
    const data = await response.json();
    console.log('Fetched shop owners:', data);  // Add this line
    setShopOwners(data);
  } catch (error) {
    console.error('Error fetching shop owners:', error);
  }
};


  useEffect(() => {
    fetchShopOwners();
  }, []);

  return (
    <div>
      <ShopOwnerForm
        fetchShopOwners={fetchShopOwners}
        editingShopOwner={editingShopOwner}
        setEditingShopOwner={setEditingShopOwner}
      />
      <ShopOwnerList
        shopOwners={shopOwners}
        fetchShopOwners={fetchShopOwners}
        setEditingShopOwner={setEditingShopOwner}
      />
    </div>
  );
};

export default App;
