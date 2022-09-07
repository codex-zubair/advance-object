car = {
    carName: 'tesla',
    color: 'red',
    price: 1000,
    drive: {
        allowed: "18+",

        owner: function ()
        {
            return('he can drive');
        },


        ownerAge:function(){
            // console.log(`He is ${this.allowed}`);
            console.log(this.allowed);
            this.owner();

        }
    }
}


console.log(car.carName);

// Changing the object name
car.carName = "not Any more Tesla";
console.log(car.carName);


// Delete object properties.
// Deleting the Car Name...
// before
console.log(Object.keys(car));
console.log(car.color);
delete car.color;
//After
console.log(Object.keys(car));
console.log(car.color);






// !so i'll not let it delete any more...
// before
Object.seal(car);
console.log(Object.keys(car));
console.log("after seal and try to delete");
delete car.carName;
// After Try to delete
console.log(Object.keys(car));
console.log("nothing Deleted!");


// !Let's Try to Modify car name After Seal
console.log(">>>After Seal Let Try To Modify Car Name<<<");
car.carName = "again Tesla";
console.log("Car Name: " + car.carName);




// ! Let Freeze Everything And Nothing Will be Change or Delete.
// before Freeze...
console.log("before Freeze");
console.log(Object.keys(car));
console.log(Object.values(car));
Object.freeze(car);
console.log("<<after Freeze Trying TO delete and modify>>");

// deleted.
delete car.carName;
console.log("<<<after tried to Delete Car Name.>>>");
console.log(Object.keys(car));
console.log("Nothing Change!");
// modified.
car.carName = "it's not a car";

// !Lets see the out put 


console.log("<<<after Tried to Change Value>>>")
console.log(car.carName);
console.log("Nothing Modified!")





// after Freeze...



