import React from 'react';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Web3 from 'web3';


function Segregation() {
  const [address,setAddress] = useState("");


  useEffect(()=>{

     const getAddress = async()=>{
    try {
      await window.ethereum.enable();
    } catch (error) {
      if (error.message === 'User denied account authorization') {
        // handle the case where the user denied the connection request
      } else if (error.message === 'MetaMask is not enabled') {
        // handle the case where MetaMask is not available
      } else {
        // handle other errors
      }
    }
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
    console.log(accounts[0])
  }

  getAddress()

  },[])

  return (
    <>
      <Navbar />
      <div className="flex flex-row mt-8 mx-4 mr-6 p-6 gap-10-px">
        <div className="flex flex-col gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-xl font-bold text-center my-10">Segregation Information</div>
              <form className="space-y-4 mr-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="isSegregationDone">Is Segregation Done?</label>
                    <p className="font-thin">Identification, classification, and segregation, having labelled and dedicated bins (colour-based as per WHO)</p>
                    <input
                      type="text"
                      name="isSegregationDone"
                      id="isSegregationDone"
                      placeholder="yes/no"
                      className="border rounded-md px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="totalWaste">Total Waste Generated</label>
                    <p className="font-thin">Quantity of waste generated - General and biomedical</p>
                    <input
                      type="text"
                      name="totalWaste"
                      id="totalWaste"
                      placeholder="kg/tonnes"
                      className="border rounded-md px-4 py-2 w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="totalBiomedicalWaste">Total Biomedical Waste Generated</label>
                  <input
                    type="text"
                    name="totalBiomedicalWaste"
                    id="totalBiomedicalWaste"
                    placeholder="kg/tonnes"
                    className="border rounded-md px-4 py-2 w-full"
                    required
                  />
                </div>
                <button className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-xl font-bold text-center my-10">Storage Information</div>
              <form className="space-y-4 mr-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="isSegregationDone">Storage properly done</label>
                    <p className="font-thin">Storage in labelled and dedicated bins(according to Biomedical Waste Managements Standards)</p>
                    <input
                      type="text"
                      name="isSegregationDone"
                      id="isSegregationDone"
                      placeholder="Yes/No"
                      className="border rounded-md px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="totalWaste">Are bins not overflowing and in properly ventilated areas?</label>
                    <p className="font-thin"></p>
                    <input
                      type="text"
                      name="totalWaste"
                      id="totalWaste"
                      placeholder="yes/no"
                      className="border rounded-md px-4 py-2 w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="totalBiomedicalWaste">Waste stored being 24 hours and is stored within cold storage?</label>
                  <input
                    type="text"
                    name="totalBiomedicalWaste"
                    id="totalBiomedicalWaste"
                    placeholder="yes/no"
                    className="border rounded-md px-4 py-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="totalBiomedicalWaste">Temperature of Room recorded</label>
                  <input
                    type="text"
                    name="temp"
                    id="temp"
                    placeholder="degree C"
                    className="border rounded-md px-4 py-2 w-full"
                    required
                  />
                </div>
                <button className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Segregation;
