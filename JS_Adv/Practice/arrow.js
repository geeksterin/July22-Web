const arr = () => {
  console.log(this);
};

arr();

function f1() {
  console.log(this);
}

f1();
