import web3 from 'web3';
// import {ethers} from 'ethers';
// import LandRegistry from '../../contracts/artifacts/contracts/LandRegistry.sol/LandRegistry.json'; // Replace with your contract's artifact

// const signer = await provider.getSigner();

// const web3 = new Web3('http://127.0.0.1:7545');
// const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 
// const contractABI = new ethers.Contract(contractAddress, LandRegistry.abi, signer);
// const contractABI =  [
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "landmarkId",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "location",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "name": "LandmarkAdded",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "propertyId",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "string",
//           "name": "location",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "name": "PropertyAdded",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "propertyId",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "oldOwner",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "PropertyTransferred",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_location",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_description",
//           "type": "string"
//         }
//       ],
//       "name": "addLandmark",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_location",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_price",
//           "type": "uint256"
//         },
//         {
//           "internalType": "address",
//           "name": "_owner",
//           "type": "address"
//         }
//       ],
//       "name": "addProperty",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_landId",
//           "type": "uint256"
//         }
//       ],
//       "name": "getLandInfo",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "landmarks",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "location",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "properties",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "location",
//           "type": "string"
//         },
//         {
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         },
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "_location",
//           "type": "string"
//         }
//       ],
//       "name": "searchLand",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalLandmarks",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalProperties",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_propertyId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "address",
//           "name": "_newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferProperty",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ]; // Replace with the actual contract ABI

// const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// contractInstance.events.DifferentPriceAlert((error, event) => {
//   if (!error) {
//     const { name, oldPrice, newPrice } = event.returnValues;
//     alert(`Alert: Property "${name}" price changed from ${oldPrice} to ${newPrice}`);
//   } else {
//     console.error('Error in event listener:', error);
//   }
// });

// Mine trial
import { useState } from 'react';
import {ethers} from 'ethers';
// import useAlert from './useAlert.js';

import LandRegistry from '../../contracts/artifacts/contracts/LandRegistry.sol/LandRegistry.json'; // Replace with your contract's artifact




const signer = await provider.getSigner();
// const address = await signer.getAddress();
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

contractInstance.events.DifferentPriceAlert((error, event) => {
    try {
        // Connect to Ethereum provider
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  
        // Get the user's Ethereum account
        // Create a contract instance
        const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, LandRegistry.abi, signer);
    }
    catch (error) {
        console.error(error);
        alert('Failed to check duplicate');
    }
if (!error) {
    const { name, oldPrice, newPrice } = event.returnValues;
    alert(`Alert: Property "${name}" price changed from ${oldPrice} to ${newPrice}`);
} else {
    console.error('Error in event listener:', error);
}
});

