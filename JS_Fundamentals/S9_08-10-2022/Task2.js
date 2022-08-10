// 3 users Informations
// 5 Properties

var Details = [
  {
    name: {
      first: "S1",
      last: "L1",
    },
    location: {
      city: "Delhi",
      state: "NCR",
    },
  },
  {
    name: {
      first: "S2",
      last: "L2",
    },
    location: {
      city: "Pune",
      state: "MH",
    },
  },
  {
    name: {
      first: "S3",
      last: "L3",
    },
    location: {
      city: "Kanpur",
      state: "UP",
    },
  },
];

//print city of second user
console.log(Details[1].location.city);

//change state of third user and print it
console.log(Details[2].location.state);
Details[2].location.state = "MP";
console.log(Details[2].location.state);

//print all the location details of first user
console.log(Details[0].location);
