// const car = {
//   name: "bmw",
//   color: "red",
//   extra: {
//     ballon: 5,
//     airbag: false,
//   },
// };

// // const objtoJson = JSON.stringify(car);
// // const jsontoObj = JSON.parse(objtoJson);
// // json.stringify objectdan json ga o'giradi
// // json.parse jsondan objectga o'giradi

// // console.log(objtoJson);
// // console.log(jsontoObj);

// // git add .
// // git commit -m "jsonlash"
// // git push origin main

// const clone = JSON.parse(JSON.stringify(car));

// clone.extra.ballon = 10;
// console.log(car);
// console.log(clone);
// "use strict";

// const isFrendCome = false;

// const meetingRequest = Promise((resolve, reject) => {
//   if (isFrendCome) {
//     const msg = "Frend I'm there";
//     resolve(msg);
//   } else {
//     const err = "I can't come there";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("I'm calling you"));
