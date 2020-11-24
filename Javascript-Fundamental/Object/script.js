var obj = {
    fistName: "Dennis",
    lastName: "Jason",
    age: 21,
    hair: "black",
    walk() {
        return "walk....";
    }
};

//mengakses properti objek
console.log(obj.fistName);
console.log(obj["fistName"]);//Aletrnatif cara mengakses properti
console.log(obj.lastName);
console.log(obj["lastName"]);
console.log(obj.age);
console.log(obj["lastName"]);
console.log(obj.hair);
console.log(obj["hair"]);


console.log(obj);


console.log(obj.fistName + " " + obj.lastName);

//menggunakan method objek
console.log(obj.walk());