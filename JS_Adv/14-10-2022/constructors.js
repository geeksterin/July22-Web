class A {
   city
    constructor(){
 this.city = "Mumbai"
    }

    constructor(city){
    this.city = city
    }

    displayCity(){                    
        console.log(this.city)
     }
}

var a1 = new A() 
var a2 = new A("pune")