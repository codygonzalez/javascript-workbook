// 03week Day 2 Project
// Number 1:
var cars = ['honda', 'mazda', 'nissan', 'toyota', 'mitsubishi', 'subaru'];
for (var i = 0; i < cars.length;) {
  console.log(cars);
  break;
}
// Number 2:
var persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};
for (var data in persons) {
  console.log(persons[data]);
}
for (var bday in persons) {
  if (bday === 'birthDate') {
    console.log(persons[bday]);
  }
}
// Number 3:
var nums = 0;
while (nums <= 1000) {
  console.log(nums);
  nums++;
}
// Number 4:
nums = 0;
do {
  console.log(nums);
  nums++;
} while (nums <= 1000);
