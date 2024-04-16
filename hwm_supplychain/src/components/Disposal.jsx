import React, { useState } from 'react';
import Navbar from './Navbar';

function Disposal() {
  const [selectedMethods, setSelectedMethods] = useState([]);

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
                <br/>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalBiomedicalWaste">Other methods</label>
                  <input
                    type="text"
                    name="totalBiomedicalWaste"
                    id="totalBiomedicalWaste"
                    placeholder="yes/no"
                    className="border rounded-md px-4 py-2 w-full"
                    required
                  />
                
              </form>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-xl font-bold text-center my-10">Disposal Information</div>
     
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
                    <label htmlFor="thermal">Landfills</label>
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
                    <label htmlFor="chemical">Ash Pits</label>
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
                    <label htmlFor="biological">Sewer Lines- Liquid Waste</label>
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
                    <label htmlFor="mechanical">Recycling</label>
                  </div>
                </div><br/>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalBiomedicalWaste">Segregation was properly done?</label>
                  <input
                    type="text"
                    name="totalBiomedicalWaste"
                    id="totalBiomedicalWaste"
                    placeholder="yes/no"
                    className="border rounded-md px-4 py-2 w-full"
                    required
                  />
         </form></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disposal;
