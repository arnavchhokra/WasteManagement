import React, { useState } from 'react';
import Navbar from './Navbar';

function Tracking() {
  const [shipments, setShipments] = useState([]);
  const [newShipment, setNewShipment] = useState({
    id: '',
    status: '',
    vehicleNo:'',
    estimatedArrival: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShipment({ ...newShipment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShipments([...shipments, newShipment]);
    setNewShipment({ vehicleNo:'',id: '', status: '', estimatedArrival: '' });
  };

  return (
    <><Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tracking</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">Shipment ID</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Shipment ID"
            value={newShipment.id}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">Transport Vehicle Number</label>
          <input
            type="text"
            name="No"
            id="No"
            placeholder="Transport Vehicle Number"
            value={newShipment.No}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            id="status"
            placeholder="Status"
            value={newShipment.status}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimatedArrival">Estimated Arrival</label>
          <input
            type="text"
            name="estimatedArrival"
            id="estimatedArrival"
            placeholder="Estimated Arrival"
            value={newShipment.estimatedArrival}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">Waste Recorded</label>
          <input
            type="text"
            name="waste"
            id="waste"
            placeholder="Waste recorded"
            value={newShipment.waste}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Shipment</button>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-4">Current Shipments</h2>
        <ul>
          {shipments.map((shipment, index) => (
            <li key={index} className="mb-2">
              <strong>Shipment ID:</strong> {shipment.id}, <strong>Vehicle No:</strong> {shipment.No},<strong>Status:</strong> {shipment.status}, <strong>Waste Recorded:</strong> {shipment.waste}, <strong>Estimated Arrival:</strong> {shipment.estimatedArrival}
            </li>
          ))}
        </ul>
      </div>
    </div></>
  );
}

export default Tracking;
