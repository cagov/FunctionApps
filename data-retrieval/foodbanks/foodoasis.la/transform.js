const csvtojsonV2=require("csvtojson");
const fs = require('fs');

let output = {
  "type": "FeatureCollection",
  "features": []
}
    
csvtojsonV2()
.fromFile('../../../FoodBanks/food-pantry.csv')
.then((csvObj) => {
  csvObj.forEach( (item) => {
    let obj = {
      "type": "Feature",
      "geometry": {
        "type": "Point"
      },
      "properties": {}
    }
    obj.geometry.coordinates = [parseFloat(item.longitude), parseFloat(item.latitude)];
    obj.properties.title = item.name;
    obj.properties.website = item.website;
    obj.properties.address_1 = item.address;
    obj.properties.address_2 = item.address2;
    obj.properties.city = item.city;
    obj.properties.state = item.state;
    obj.properties.zip = item.zip;
    obj.properties.phone = item.phone;
    output.features.push(obj);
  })
  fs.writeFileSync('../../../FoodBanks/foods.json',JSON.stringify(output),'utf8');
})