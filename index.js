// This is my solution 
class Room {
    #isBooked; 
    constructor(floorNum, roomNum, price, isBooked){
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }
    printRoom() {
        return `Floor ${this.floorNum} Room ${this.roomNum} Price ${this.price}`;
    }
    book(){
        this.#isBooked = true;
    }
    isBooked (){
        return this.#isBooked;
    }
}
class RoomWithView extends Room{
    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds){
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
}

class SleepingRoom extends Room {
constructor(floorNum, roomNum, price, isBooked, personCapacity){
super(floorNum, roomNum, price, isBooked);
this.personCapacity = personCapacity ; 
}
}

class Hotel {
    #minFloor;
    #maxFloor;
    constructor(address, numberOfRooms, rooms, minFloor, maxFloor){
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.rooms = rooms;
        this.#maxFloor = maxFloor ; 
        this.#minFloor = minFloor;
    }

    //assuming the returened value is string 
    printAdvertismen() { 
        return (`Address: ${this.address}  number of rooms: ${this.numberOfRooms} , minimum floor ${this.#minFloor}, maximum floor: ${this.#maxFloor}, list of rooms: ${this.#listOfRooms()}`)

    }
    #listOfRooms(){
        let result  = '';
        for (let i = 0; i < this.rooms.length; i++) {
            result += this.rooms[i].printRoom();
            result+='\n';
        }
        return result;
    }
    

    listBookedRooms() {
        let result  = '';
        for (let i = 0; i < this.rooms.length; i++) {
            if(this.rooms[i].isBooked()){
            result += this.rooms[i].printRoom();
            result+='\n';
        }
    }
        return result;
    }
}


const roominstance = new Room(5,15,1000,false) ;
console.log(roominstance) ;
console.log(roominstance.isBooked()) ; 
console.log(roominstance.printRoom()) ; 


