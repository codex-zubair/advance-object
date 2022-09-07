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
/* console.log("Keys: -----------------------------------");
console.log(Object.keys(car));
console.log("values: ----------------------------------");
console.log(Object.values(car));
console.log("Entries: ----------------------------------");
console.log(Object.entries(car));
 */



// Entries Destruction....
for (entries of Object.entries(car))
{
    console.log(`${entries[0]} = ${entries[1]}`);
}
