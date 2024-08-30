let age = 32;
let userName = "Ani";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let adultYears;// defined adultYears

function calculateAdultYears(userAge ){
    return userAge - 18; 
    // if we add let here we will again define adultYears here 
    //which will be known as variable shadowing
    // you can overwrite variables from outside of functions.
    // You can create new variables with the same name
    // and that will leave the outside variables intact,
    // it will not delete them or changed them,
    // it will just create an additional variable of the same name,
    // which is only usable inside of this function.
}

adultYears = calculateAdultYears(age);
alert(adultYears);
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age);

console.log(adultYears);

let person = {
    name: 'Ani',//property
    greet() { //method
        console.log('Hello!');
    }
};// if we add a function in a object it is called a method

person.greet();