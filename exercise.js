// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName ='Web Development - The Complete Guide';
let coursePrice = 4500;
let courseGoal=['learn','code','job']

// 2) Output ("alert") the three variable values

alert(courseName);
alert(coursePrice);
alert(courseGoal);
alert(courseGoal[1]);

// 3) Try "grouping" the three variables together and still output their values thereafter


let onlineCourse = {
    name:'Web Development - The Complete Guide',
    price: 4500,
    goals:['learn','code','job']
}

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

// 4) Also output the second element in your "main goals" variable

alert(onlineCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)


function accessElement(list , index) {
    let listElement = list[index];
    return listElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result

let mainGoal = accessElement(onlineCourse.goals, 1);
alert(mainGoal);


