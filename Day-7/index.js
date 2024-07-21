// Q1 calculate sum of numbers from 10 to 40

function sumAllNum(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    count = count + i;
  }
  console.log("count : ", count);
}
sumAllNum(10, 40);

// Q2 calculate factorial of given number 10

function factorial(num) {
  count = 1;
  for (var i = 2; i <= num; i++) {
    count = count * i;
  }
  console.log("Factorial is : ", count);
}
factorial(10);


function factorial2 (number){
    count=1
    for(var i=number;i>=1;i--){
       count=count*i
    }
    console.log("Factorial2 is : ",count)
}
factorial2(10)