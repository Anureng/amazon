// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    address public owner;

    struct  Item {
        uint256 id;
        string name;
        string category;
        string image;
        uint256 cost;
        uint256 rating;
        uint256 stock;
        bool buyed;
    }

    struct Order {
        uint256 time;
        Item item;
    }

    event List(string name, uint256 cost, uint256 quantity);
    event buy(address buyer, uint256 orderId, uint256 itemId);

    constructor() {
        owner = msg.sender;
    }

    mapping(uint256 => Item) public items;
    mapping(address => uint256) public orderCount;
    mapping(address => mapping(uint256 => Order)) public orders;
    Item[] AllItems;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }



    function list(
        uint256 _id,
        string memory _name,
        string memory _category,
        string memory _image,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public onlyOwner {
        // Item memory item = Item(
        //     _id,
        //     _name,
        //     _category,
        //     _image,
        //     _cost,
        //     _rating,
        //     _stock,
        //     false
        // );

        // items[_id] = item;

        items[_id].id=_id;
        items[_id].name=_name;
        items[_id].category=_category;
        items[_id].image=_image;
        items[_id].cost=_cost;
        items[_id].rating=_rating;
        items[_id].stock=_stock;
        items[_id].buyed=false;
        AllItems.push(Item(_id,_name,_category,_image,_cost,_rating,_stock,false));
        emit List(_name, _cost, _stock);
    }

    function Buy(uint256 _id) public payable {
        Item memory item = items[_id];
        require(msg.value >= item.cost);
        require(item.cost > 0);
        Order memory order = Order(block.timestamp, item);
        orderCount[msg.sender]++;
        orders[msg.sender][orderCount[msg.sender]] = order; 
        items[_id].stock = item.stock;
        items[_id].buyed=true;
        emit buy(msg.sender, orderCount[msg.sender], item.id);
    }

    function wthdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }

    function checkBalance() public view returns(uint){
        return  address(this).balance;
    }    

    function checkIfProjectReach(uint _id) public {
        items[_id].buyed=false;
    }

    function allitem() public view returns(Item[] memory){
        return AllItems;
    }
}


// contract sales{
//      Lock lock;
//       function MyContract(address otherAddress) public{
//       lock = Lock(otherAddress);
//     }
//   struct User{
//         string name;
//         uint phoneNumber;
//         address createrAddress;
//     }

//     mapping (address=>User) public Users;

//       function getLockValue(uint id) public view returns (uint,string memory,string memory,string memory,uint,uint,uint,bool){
//       return  lock.items(id);
//     }

//     function addUser(string memory _name , uint _phoneNumber) public{
//         User memory allUsers=User(_name,_phoneNumber,msg.sender);
//         Users[msg.sender]=allUsers;
//     }



// }
