//task 1
console.log("external JS");

//task 2

function sumArray(arr) {
  var sum=0;
        arr.forEach(function(value, index){
          sum+=value;

        });
        return sum;
        }

        console.log(sumArray([1,2,3,4,5]));
        console.log(sumArray([19,-2,30,-45]));

//Task 3

function checkEmail(emailString){
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var match = emailFormat.test(emailString);
  return match;
}

console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith.info"));

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

function getReadingStatus(index){
  return library[index].readingStatus;
}

console.log(getReadingStatus(2));

//Task 5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//5a
   function addItem(){
    cart.push(newItem);
    console.log(cart);
   }
var newItem={name:"Watch", price: 64, quantity: 1}
    addItem(newItem);

//5b
console.log(cart.sort());


//5c

function findByName(givenName){
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].name == givenName){
      console.log("Name: "+cart[i].name + "Price: " + cart[i].price + "Quantity: "+cart[i].quantity);
    }
  }
}

//5d

function totalBill(){
  var totalAmount=0;
  for( var i =0; i < cart.length; i++){
    totalAmount = totalAmount + cart[i].quantity*cart[i].price;

  }
  return totalAmount;
  }
console.log(totalBill());