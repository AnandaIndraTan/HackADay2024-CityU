// backend/contracts/BiometricStorage.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BiometricStorage {
    struct BiometricData {
        uint256 id;
        string name;
        uint8 age;
        string gender;
        string facialHair;
    }

    mapping(uint256 => BiometricData) public biometricRecords;
    uint256 public recordCount;

    event RecordAdded(uint256 id, string name, uint8 age, string gender, string facialHair);

    function addBiometricRecord(
        string memory _name,
        uint8 _age,
        string memory _gender,
        string facialHair,
    ) public {
        recordCount++;
        biometricRecords[recordCount] = BiometricData(recordCount, _name, _age, _gender, _facialHair);
        emit RecordAdded(recordCount, _name, _age, _gender,_facialHair);
    }

    function getBiometricRecord(uint256 _id) public view returns (BiometricData memory) {
        require(_id > 0 && _id <= recordCount, "Record does not exist");
        return biometricRecords[_id];
    }
}
