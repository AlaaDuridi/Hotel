//this is constructor's solution 
class Hotel {
    //attributes
    address='';
    numOfRooms=0; 
    #minFloor=5;
    #maxFloor=10;

    //Composition 
    rooms=[];

    //in typescript  -- > Composition 
    //rooms:Array<Room> =[] 

    //constructor
    constructor(address, numOfRooms) {
        this.address=address ; 
        this.numOfRooms=numOfRooms ;
    }
    printAdvertisement(){
        console.log('********************') ; 
        console.log(this.address);
        console.log(`Our hotel has ${this.numOfRooms} Rooms`);
        console.log('*********************') ;
    }
    listBookedRooms(){
        console.log('***********') ; 
        console.log('Booked Rooms: ') ; 
        //
        this.rooms.forEach(r => {
            if(r.isBooked)
            r.print() ; 
        });
        console.log('***********') ; 

    }
}

class Room {
    //attributes
    floorNum;
    roomNum;
    price =0 ;
    #isBooked = false ; 
    //constructor
    constructor (floorNum, roomNum,price) {
        this.floorNum=floorNum ; 
        this.roomNum=roomNum; 
        this.price=price ; 
    }
    print() {
        console.log('-----------') ; 
        console.log(`Room: ${this.floorNum}${this.roomNum}, cost: ${this.price}`) ;
        console.log('-----------') ; 
    }
    book() {
        this.#isBooked=true;
    }
    // unbook() {
    // }

    get isBooked() {
        return this.#isBooked;
    }
}

class RoomWithView extends Room{
    view='';
    numOfBeds=0;
    constructor(floorNum,roomNum,price,view,numOfBeds) { 
        super(floorNum,roomNum,price) ;
        this.view=view ;
        this.numOfBeds=numOfBeds ;
    }
    //extra functionality 
    print() {
        console.log('-----------') ; 
        console.log(`Room: ${this.floorNum}${this.roomNum}, cost: ${this.price}`) ;
        console.log(`View: ${this.view}, Num of beds: ${this.numOfBeds}`) ;
        console.log('-----------') ; 
    }
}

class SleepingRoom extends Room { 
    personCapacity =0 ; 
    constructor(floorNum,roomNum,price,personCapacity) {
        super(floorNum,roomNum,price) ;
        this.personCapacity=personCapacity;
    }
}


//Mock Data 


const main =() =>{
   const  abcdHotel= new Hotel("ABC Hotel\n Hebron - wadi Altufah - 10st", 6) ; 
    const r1 = new Room(5,15,200);
    const r2 = new RoomWithView(6,14,500,'Beach',2) ; 
    const r3 = new RoomWithView(6,15,300,'city',1) ;
    const r4 = new SleepingRoom(7,10,250,4) ; 
    const r5 = new Room(5,18,280) ;

    //how to add these rooms to the hotel
    //option 1 
    // abcdHotel.rooms.push(r1) ;
    // abcdHotel.rooms.push(r2) ;
    // abcdHotel.rooms.push(r3) ;
    // abcdHotel.rooms.push(r4) ;
    // abcdHotel.rooms.push(r5) ;

    //option 2 
    abcdHotel.rooms = [r1,r2,r3,r4,r5] ; 

    //functions 
    abcdHotel.printAdvertisement() ; 
    abcdHotel.listBookedRooms() ; 
    r1.book() ; 
    r4.book() ; 

    abcdHotel.rooms[1].book() ; 
    abcdHotel.listBookedRooms() ; 

}
main() ; 