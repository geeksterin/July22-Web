// WAF which accepts one argument (a users object) and return the number of users whose online property
//is set to true.
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: false,
  },
  Sarah: {
    online: false,
  },
};

function noOfUsersOnline(users) {
  var count = 0;
  for (var user in users) {
    if (users[user].online) {
      count++;
    }
  }
  return count;
}
console.log(noOfUsersOnline(users));
