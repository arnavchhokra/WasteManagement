import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Web3 from 'web3';
import ABI from "../ABI.json";

function Disposal() {
  const [address, setAddress] = useState("");
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [isSegregationProper, setIsSegregationProper] = useState("");

  useEffect(() => {
    const getAddress = async () => {
      const web3 = new Web3(window.ethereum);
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
      console.log(address);
    }
    getAddress();
  }, [address]);

  const web3 = new Web3(window.ethereum);
  const contractAddress = "0x1d17b219b0ef6e5cba439ba18b8c23ff5e8248d1";
  const contract = new web3.eth.Contract(ABI, contractAddress);

  const disposalWasteRegistration = async () => {
    try {
      console.log(address);
      await contract.methods
        .registerDisposalWaste(selectedMethods, isSegregationProper)
        .send({ from: address });
      alert('Disposal Waste registered successfully');
    } catch (error) {
      alert('Disposal Waste registration failed', error);
    }
  }

  const handleMethodChange = (e) => {
    const method = e.target.value;
    if (selectedMethods.includes(method)) {
      setSelectedMethods(selectedMethods.filter((item) => item !== method));
    } else {
      setSelectedMethods([...selectedMethods, method]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row mt-8 mx-4 mr-6 p-6 gap-10-px">
        <div className="flex flex-col gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-xl font-bold text-center my-10">Treatment Information</div>
              <form className="space-y-4 mr-5">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalBiomedicalWaste">Select Treatment Methods Used</label>
                  <div>
                    <input
                      type="checkbox"
                      id="thermal"
                      name="method"
                      value="thermal"
                      checked={selectedMethods.includes('thermal')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="thermal">Thermal-Incinerators and Autoclavaes</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="chemical"
                      name="method"
                      value="chemical"
                      checked={selectedMethods.includes('chemical')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="chemical">Chemical-Chemical disinfection</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="biological"
                      name="method"
                      value="biological"
                      checked={selectedMethods.includes('biological')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="biological">Biological-Decomposition and Biodigestion</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mechanical"
                      name="method"
                      value="mechanical"
                      checked={selectedMethods.includes('mechanical')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="mechanical">Mechanical-Shredding Grinding</label>
                  </div>
                </div>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalBiomedicalWaste">Other methods</label>
                <input
                  type="text"
                  name="totalBiomedicalWaste"
                  id="totalBiomedicalWaste"
                  placeholder="yes/no"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                  onChange={(e) => setIsSegregationProper(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-xl font-bold text-center my-10">Disposal Information</div>
              <form className="space-y-4 mr-5">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalBiomedicalWaste">Select Disposal Methods Used</label>
                  <div>
                    <input
                      type="checkbox"
                      id="landfills"
                      name="method"
                      value="landfills"
                      checked={selectedMethods.includes('landfills')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="landfills">Landfills</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="ashPits"
                      name="method"
                      value="ashPits"
                      checked={selectedMethods.includes('ashPits')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="ashPits">Ash Pits</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="sewerLines"
                      name="method"
                      value="sewerLines"
                      checked={selectedMethods.includes('sewerLines')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="sewerLines">Sewer Lines- Liquid Waste</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="recycling"
                      name="method"
                      value="recycling"
                      checked={selectedMethods.includes('recycling')}
                      onChange={handleMethodChange}
                    />
                    <label htmlFor="recycling">Recycling</label>
                  </div>
                </div>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isSegregationProper">Segregation was properly done?</label>
                <input
                  type="text"
                  name="isSegregationProper"
                  id="isSegregationProper"
                  placeholder="yes/no"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                  value={isSegregationProper}
                  onChange={(e) => setIsSegregationProper(e.target.value)}
                />
              </form>
              <button onClick={disposalWasteRegistration} className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disposal;
