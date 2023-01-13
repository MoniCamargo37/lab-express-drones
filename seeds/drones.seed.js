// Iteration #1
const MONGO_URL = 
"mongodb://localhost/lab-express-drones"
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Drone = require("../models/Drone.model");


const drones = [
    { 
    name: "DJI MINI 3 PRO",
    image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93790528/fee_786_587_png", 
    description: "Get the DJI MINI 3 PRO mini drone, white, with autonomy of up to 35 min, reaches a maximum height of 4000 m, 4K recording, with Wi-fi and Bluetooth, accompanied by many accessories",
    price: 819, 
    },
   {
    name: "DJI Ryze TELLO",
    image:"https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77335722/fee_786_587_png", 
    description: "hanks to all the technology that the Tello drone has, such as a flight controller powered by DJI, you can perform incredible tricks such as starting to fly just by throwing it into the air or doing aerobatics just by sliding the screen of your mobile.",
    price: 120, 
},
{
  name: "DJI Mavic 3 Classic",
  image:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99111868/fee_786_587_png", 
  description: "x1 Drone DJI Mavic 3 Classic; x1 DJI Mavic 3 Intelligent Flight Battery; x1 DJI Mavic 3 Classic Storage Case; x3 DJI Mavic 3 noise reduction propellers (torque); x1 DJI 65W portable charger; x1 USB-C cable; x1 DJI Radio Control with display; x1 Spare DJI RC Pro Control Levers (Pair)",
  price: 1740, 
}

  ];

mongoose
  .connect(MONGO_URL)
  .then((res) => console.log("connected to Seed database"))
  .then(() => {
    Drone.create(drones);

  })
  .catch((error) => console.log(error));


  module.exports = Drone;