// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstate {
    struct Property {
        uint id;
        string location;
        uint price;
        address payable owner;
        bool forSale;
    }

    mapping(uint => Property) public properties;
    uint public propertyCount;
    address public contractOwner;  // Declare the contract owner

    event PropertyListed(uint id, string location, uint price, address owner);
    event PropertySold(uint id, address newOwner, uint price);
    
    // Modifier to restrict access to the contract owner
    modifier onlyContractOwner() {
        require(msg.sender == contractOwner, "Only the contract owner can perform this action");
        _;
    }

    // Modifier to restrict access to the property owner
    modifier onlyOwner(uint _propertyId) {
        require(msg.sender == properties[_propertyId].owner, "Not the property owner");
        _;
    }

    // Constructor to initialize the contract owner
    constructor() {
        contractOwner = msg.sender;  // Set the contract owner as the address that deploys the contract
    }

    function listProperty(string memory _location, uint _price) public {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, _location, _price, payable(msg.sender), true);
        emit PropertyListed(propertyCount, _location, _price, msg.sender);
    }

    function buyProperty(uint _propertyId) public payable {
        Property storage property = properties[_propertyId];
        require(property.forSale, "Property not for sale");
        require(msg.value >= property.price, "Insufficient funds");

        // Transfer ownership
        property.owner.transfer(msg.value);
        property.owner = payable(msg.sender);
        property.forSale = false;

        emit PropertySold(_propertyId, msg.sender, property.price);
    }

    function setPropertyForSale(uint _propertyId, uint _price) public onlyOwner(_propertyId) {
        Property storage property = properties[_propertyId];
        property.price = _price;
        property.forSale = true;
    }

    function getPropertyDetails(uint _propertyId) public view returns (uint, string memory, uint, address, bool) {
        Property memory property = properties[_propertyId];
        return (property.id, property.location, property.price, property.owner, property.forSale);
    }
    
    // Function to withdraw funds, only accessible by the contract owner
    function withdrawFunds() public onlyContractOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
