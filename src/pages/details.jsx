import { useState } from 'react';
import { ethers } from 'ethers';

import LandRegistry from '../../contracts/artifacts/contracts/LandRegistry.sol/LandRegistry.json'; // Replace with your contract's artifact

export default function SearchLand() {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [landData, setLandData] = useState(null);
  

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearchLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("cliccked")

    try {


      const data = JSON.parse( localStorage.getItem(searchName) );
      data.name = searchName;

       console.log(data)

      setLandData(data);
      

      // Connect to Ethereum provider
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

      

      // Create a contract instance
      const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract's address
      const contract = new ethers.Contract(contractAddress, LandRegistry.abi, provider);

      console.log("hi")

      // Search for land by name and location
      const landId = await  contract.searchLand(searchName, searchLocation);

      console.log("heloo")
      console.log( 'the land id',  landId)

      if (landId > 0) {
        // Retrieve land information
        const landInfo = await contract.getLandInfo(landId);

        landInfo.water_connection =  data.water_connection;
        landInfo.electricity_bill =  data.electricity_bill;
        
        // Update land data state
        // setLandData(landInfo);
      } else {
        alert('Land not found');
        // setLandData(null);
      }
      console.log("the info is",  landInfo);
      setLandData(landInfo);

    } catch (error) {
      // console.error(error);
      // alert('Failed to search for land');
      // setLandData(null);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4 p-5">Search Land</h1>

      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchName">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="searchName"
            type="text"
            placeholder="Enter land name"
            value={searchName}
            onChange={handleSearchNameChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchLocation">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="searchLocation"
            type="text"
            placeholder="Enter land location"
            value={searchLocation}
            onChange={handleSearchLocationChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>

      {landData && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Land Information</h2>
          <p>
            <strong>Name:</strong> {landData.name}
          </p>
          <p>
            <strong>Location:</strong> {landData.location}
          </p>
          <p>
            <strong>Price:</strong> {landData.price} ETH
          </p>
          <p>
            <strong>Water Connection</strong> {landData.water_connection} 
          </p>
          <p>
            <strong>Electricity bill</strong> {landData.electricity_bill} 
          </p>
        </div>
      )}
    </div>
  );
}
