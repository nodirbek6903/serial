const car = {
  name: "bmw",
  color: "red",
  extra: {
    ballon: 5,
    airbag: false,
  },
};

// const objtoJson = JSON.stringify(car);
// const jsontoObj = JSON.parse(objtoJson);
// json.stringify objectdan json ga o'giradi
// json.parse jsondan objectga o'giradi

// console.log(objtoJson);
// console.log(jsontoObj);

const clone = JSON.parse(JSON.stringify(car));

clone.extra.ballon = 10;
console.log(car);
console.log(clone);
