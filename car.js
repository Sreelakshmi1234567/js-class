class car{
    constructor(brand,model){
        this.brand=brand
        this.model = model
    }
    CarDetails(){
        console.log(`car brand:${this.brand}`);
        console.log(`car model:${this.model}`);
        
        
    }
}
const car1=new car("tata","nexon")
car1.CarDetails()