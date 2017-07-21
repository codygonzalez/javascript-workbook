var cars = ['ford', 'dodge', 'chevy', 'jeep'];
console.log(cars.length);
var moreCars = ['mazda', 'nissan', 'subaru', 'honda'];
// concat cars and more cars
var totalCars = cars.concat(moreCars);
console.log(totalCars);
// indexOf Honda
console.log(moreCars.indexOf('honda'));
// lastIndexOf Ford
console.log(cars.lastIndexOf('ford'));
// JOIN
var stringsOfCars = totalCars.join(' ');
console.log(stringsOfCars);
// SPLIT
totalCars = stringsOfCars.split(',');
console.log(totalCars);
// REVERSE order
var carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// reversed and sorted
carsInReverse.sort();
console.log(carsInReverse);
// SLICE and DICE!!
carsInReverse = carsInReverse.slice(2, 4);
console.log(carsInReverse);
// SPLICE up your life!
carsInReverse.splice(1, 2, 'ford', 'honda');
console.log('this is splice log: ' + carsInReverse);
// push push push
carsInReverse.push('dodge', 'ford');
console.log('push method: ' + carsInReverse);
// POP don't stop
console.log('i am popping: ' + carsInReverse.pop());
// SHIFT SHIFT SHIFT
console.log('i am shifting: ' + carsInReverse.shift());
// UNSHIFT method
carsInReverse.unshift('McLaren');
console.log(carsInReverse);
// forEach took a minute to figure out!
var numbers = [23, 45, 0, 2];
function mutate () {
  numbers.forEach(function (element) {
    console.log(element + 2);
  });
  return;
}
mutate();
