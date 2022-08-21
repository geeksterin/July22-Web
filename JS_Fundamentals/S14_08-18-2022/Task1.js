var data = [
  [0, 3, 5],
  [8, 9, 7],
  [10, 11, 12], //data[2][2]
];

// console.log(data[2][2]);

var data = [
  [
    10,
    20,
    {
      name: {
        first: "Kabir",
        last: "Sagar",
      },
    },
  ],
  [
    10,
    20,
    {
      address: [
        10,
        20,
        {
          city1: "gurugram",
        },
      ],
    },
  ],
];

console.log(data[0][2].name.last);
console.log(data[1][2].address[2].city1);
