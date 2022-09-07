car = {
    carName: 'tesla',
    color: 'red',
    price: 1000,
    drive: {
        allowed: "18+",

        owner: function ()
        {
            console.log('he can drive');
        },


        ownerAge:function(){
            // console.log(`He is ${this.allowed}`);
            console.log(this.allowed);
            this.owner();

        },

        obj2:{
            ownerAge2: ()=>
            {
                // console.log(`He is ${this.allowed}`);
                console.log(this.allowed);
                // this.owner();
            }


        
        }
    }
}



car.drive.ownerAge();
car.drive.obj2.ownerAge2();


//! THIS WILL WORK TWO STEP UP...ALL INSIDE DOCUMENT THIS WILL Refer the Document values.. node.. but outside document this will refer to window.