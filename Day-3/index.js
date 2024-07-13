var age = 18

if (age < 18){
    console.log("You are not eligible for driving licence")
}else if(age == 18){
    console.log("You are eligible for lerning licence")
}else{
    console.log("You are eligible for driving licence")
}

//*************************************************************//

var age2 = 24

if (age2 < 18){
    console.log("You are not eligible for driving licence")
}else if(age2 == 18){
    console.log("You are eligible for lerning licence")
}else{
    console.log("You are eligible for driving licence")
}

//*************************************************************//

var age3 = 16

if (age3 < 18){
    console.log("You are not eligible for driving licence")
}else if(age3 == 18){
    console.log("You are eligible for lerning licence")
}else{
    console.log("You are eligible for driving licence")
}

//*************************************************************//


var selectsport = "cricket"

   switch (selectsport){
    case "cricket":
    console.log("You selected cricket")
    break;
    case "football":
    console.log("You selected football")
    break;
    case "basketball":
    console.log("You selected basketball")
    break;
    case "baseball":
    console.log("You selected baseball")
    break;
    default:
    console.log("selected option is not available ")
   }

//*************************************************************//
console.log(100<50 || 50<50 ||20>50)
console.log(1>2 && 2<1 && 2>2)


var student1 = 100
var student2 = 50
var student3 = 20

//**********&**************//

console.log(student1 >= 50 && student2 >= 50 && student3 >= 50)
console.log(student1 <= 100 && student2 <= 50 && student3 <= 50)


//***********||**************//


console.log(student1 > 100 || student2 < 50 || student3 > 50)
console.log(student1 <= 100 || student2 <= 50 || student3 <= 50)