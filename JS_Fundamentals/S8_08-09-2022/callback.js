function fn(f) {
  f("sagar");
  console.log("I am Main Function code");
  f("kabir");
  f("geekster");
}

fn(function (name) {
  console.log(name);
});
