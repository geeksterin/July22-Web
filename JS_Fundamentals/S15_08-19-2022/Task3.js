// WAF  so that it returns true if the object passed to it contains Property key
// as Alan, Jeff, Sarah and Ryan
//and returns false if it does not contain any one of the
//following keys or any different key

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function matchKeys(usersObj) {
  var keysArr = [];
  var temp = [];
  keysArr = Object.keys(usersObj); //[]
  //   for (var key in usersObj) {
  //     keysArr.push(key);
  //   }
  keysArr.forEach(function (ele) {
    if (ele == "Alan" || ele == "Jeff" || ele == "Sarah" || ele == "Ryan") {
      temp.push(true); // [true,true,true,false]
    } else {
      temp.push(false);
    }
  });
  return !temp.includes(false); //true //false

  //   console.log(keysArr);
}
console.log(matchKeys(users));
