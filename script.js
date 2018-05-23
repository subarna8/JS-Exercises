//task 1
console.log("external JS");

//task 2

function arrSum(arr) {
  var sum=0;
        arr.forEach(function(value, index){
          sum+=value;

        });
        return sum;
        }

        console.log(arrSum([1,2,3,4,5]));
        console.log(arrSum([19,-2,30,-45]));

//Task 3

function checkingEmail(emailString){
  var formatofEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var match = formatofEmail.test(emailString);
  return match;
}

console.log(checkingEmail("john@smith.com"));
console.log(checkingEmail("johnsmith.info"));

//Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function getreadingStatus(index){
  return library[index].readingStatus;
}

console.log(getreadingStatus(2));

