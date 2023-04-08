let car1 = {
    name: "Ford Mustang",
    speed: 250,
    year: 2020,
    toString: function(){
        return "Name: " + this.name, "Speed: " + this.speed, "Year: " + this.year
    },
    CompareToObject: function(other){
        return this.name === other.name && this.speed === other.speed && this.year === other.year;
    }
}
let car2 = {
    name: "Toyota Camry",
    speed: 220,
    year: 2018,
    toString: function(){
        return "Name: " + this.name, "Speed: " + this.speed, "Year: " + this.year
    },
    CompareToObject: function(other){
        return this.name === other.name && this.speed === other.speed && this.year === other.year;
    }
}
let car3 = {
    name: "Tesla Model S",
    speed: 270,
    year: 2022,
    toString: function(){
        return "Name: " + this.name, "Speed: " + this.speed, "Year: " + this.year
    },
    CompareToObject: function(other){
        return this.name === other.name && this.speed === other.speed && this.year === other.year;
    }
}
console.log(car1.CompareToObject(car3), car2.CompareToObject(car3))
