import cameraImg from "../assets/images/camera.png";
import gamingConsoleImg from "../assets/images/playstation.png";
import tabletImg from "../assets/images/Tab.png";
import microwaveImg from "../assets/images/micorOven.png";
import tvImg from "../assets/images/TV.png";
import powerBankImg from "../assets/images/PowerBankSetup.png";
import droneImg from "../assets/images/Drone.png";
import earbudsImg from "../assets/images/Pods And Mic.png";
import headphonesImg from "../assets/images/Headset.png";
import hairDryerImg from "../assets/images/Hair Dryer.png";
import shoesImg from "../assets/images/Shoes.png";
import smartWatchImg from "../assets/images/Smart Watch.png";
import wristWatchImg from "../assets/images/Normal Watch.png";
import speakerPerfumeImg from "../assets/images/Speaker and Perfume.png";
import campTentImg from "../assets/images/Camp Tent.png";
import coffeeMakerImg from "../assets/images/Tea Cattle.png";

// build product entries for each file we have; speakerPerfumeImg is reused for
// two separate items (speaker, perfume) since a single image contains both.
const products = [
  { id: 1, name: "Camera", price: 25000, description: "High quality digital camera.", image: cameraImg },
  { id: 2, name: "Gaming Console", price: 40000, description: "Next-gen gaming console.", image: gamingConsoleImg },
  { id: 3, name: "Tablet", price: 18000, description: "Portable tablet for work and study.", image: tabletImg },
  { id: 4, name: "Microwave Oven", price: 9000, description: "Convenient microwave for quick meals.", image: microwaveImg },
  { id: 5, name: "Smart TV", price: 35000, description: "4K Ultra HD Smart TV.", image: tvImg },
  { id: 6, name: "Power Bank", price: 1500, description: "Fast charging power bank.", image: powerBankImg },
  { id: 7, name: "Drone", price: 30000, description: "Camera drone for photography.", image: droneImg },
  { id: 8, name: "Wireless Earbuds", price: 3500, description: "Noise cancelling earbuds.", image: earbudsImg },
  { id: 9, name: "Headphones", price: 2500, description: "Over-ear comfortable headphones.", image: headphonesImg },
  { id: 10, name: "Coffee Maker", price: 7000, description: "Automatic coffee machine.", image: coffeeMakerImg },
  { id: 11, name: "Bluetooth Speaker", price: 3000, description: "Portable speaker with bass.", image: speakerPerfumeImg },
  { id: 12, name: "Smart Watch", price: 5000, description: "Fitness tracking smart watch.", image: smartWatchImg },
  { id: 13, name: "Wrist Watch", price: 8000, description: "Classic analog watch.", image: wristWatchImg },
  { id: 14, name: "Hair Dryer", price: 2000, description: "Fast drying hair dryer.", image: hairDryerImg },
  { id: 15, name: "Running Shoes", price: 4500, description: "Comfortable sports shoes.", image: shoesImg },
  { id: 16, name: "Smart Speaker", price: 6000, description: "Voice assistant smart speaker.", image: speakerPerfumeImg },
  { id: 17, name: "Perfume", price: 3500, description: "Long lasting fragrance.", image: speakerPerfumeImg },
  { id: 18, name: "Camping Tent", price: 12000, description: "Waterproof camping tent.", image: campTentImg },
];

export default products;