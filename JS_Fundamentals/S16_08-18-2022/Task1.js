// WAF so that it returns an array containing all the properties in the object.
let users = {
  Alan: {
    age: 27,
    online: false, // for ...in // Object.keys()
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
  Kabir: {
    id: 101,
  },
};

function getObjectKeys(users) {
  var keysOfObject = [];

  keysOfObject = Object.keys(users);
  return keysOfObject;
}
// console.log(getObjectKeys(users));

function getKeys(users) {
  var keysOfObject = [];
  for (var key in users) {
    keysOfObject.push(key);
  }
  return keysOfObject;
}
console.log(getKeys(users));
