const fs = require('fs');

let test = ["너", "나", "니", "뭐여"];

for (let i = 0; i < test.length; i++) {
  fs.mkdir(`${test[i]}`, function (err) {
    if (err === true) {
      console.log("너 틀림");
    }
  });
}