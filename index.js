const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
  class Transport{
    constructor(type, price, brand, doors, maxSpeed){
        this.type=type;
        this.price=price;
        this.brand=brand;
        this.doors=doors;
        this.maxSpeed=maxSpeed;
    }
    getInfo(){
        return{
            type: this.type,
            brand: this.brand,
        }
    }
    getPrice(){
        return{
            price: this.price,
        }
    }
  }
  class  Car extends Transport{
    constructor(type, price, brand, doors, maxSpeed){
        super (type, price, brand, doors, maxSpeed);
    }
    getDoorsCount(){
        return{
            doors: this.doors,
        }
    }
  }
  class Bike extends Transport{
    constructor(type, price, brand, doors, maxSpeed){
        super (type, price, brand, doors, maxSpeed);
    }
    getMaxSpeed(){
        return{
            maxSpeed: this.maxSpeed,  
        }
    }
  }

const transportContainer = document.getElementById("transport-container");
data.forEach(function (item){
  if (item.type === "car"){
    const transport = new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === "bike"){
    const transport = new Bike (item.type, item.price, item.brand, item.maxSpeed);
  }
});
  const TransportDiv = document.createElement("div");
  TransportDiv.innerHTML = `
  <h2>${Transport.brand}</h2>
  <p>${Transport.getInfo()}</p>
  <p>${Transport.getPrice()}</p>;
  if (class Car){
    TransportDiv.innerHTML += "<p>${TransportDiv.getDoorsCount()}</p>";
  } else if (class Bike){
    TransportDiv.innerHTML += "<p>${TransportDiv.getMaxSpeed()}</p>";
  }
  transportContainer.appendChild(TransportDiv);
