var student = {
  data: [
    {
      name: {
        first: "Rahul",
        last: "Jaiswal",
      },
      location: {
        India: {
          State: [
            {
              name: "MH",
              city: [
                {
                  name: "Nagpur", //pune
                  area: {
                    sector: "1001",
                  },
                },
              ],
            },
            {},
          ],
        },
      },
    },
    {},
    {},
  ],
  info: {
    college: "xyz",
    uni: "xyz",
  },
};

console.log(student.data[0].location.India.State[0].city[0].area.sector);
student.data[0].location.India.State[0].city[0].name = "pune";
console.log(student.data[0].location.India.State[0].city[0].name);
