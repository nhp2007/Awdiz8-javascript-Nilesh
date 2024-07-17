function printnum1 (start, end){
    for (var i = start; i <= end;i++){
        console.log(i)
    }
}
printnum1(20,40)

console.log("----------------------------------------------")


function printnum2 (start, end, sequnce){
    for (var j = start;j<=end;j+=sequnce)
        {
        console.log(j)
    }
}
printnum2(1, 100, 2)

console.log("----------------------------------------------")

function printnum3 (start, end, sequnce){
    for (var k=start;k<=end;k+=sequnce){
        console.log(k)
    }
}
printnum3(50, 150, 10)




// Q1
console.log("---------------------Q1------------------------");

function printNumbersReverse(starting, ending, sequnce) {
  for (var i = starting; i >= ending; i -= sequnce) {
    console.log(i);
  }
}

printNumbersReverse(40, 20, 3);

// Q2
console.log("---------------------Q2------------------------");

function printOddNum(start, end) {
  for (var j = start; j >= end; j--) {
    if (j % 2 == 1) {
      console.log(j);
    }
  }
}

printOddNum(40, 0);

// Q3
console.log("---------------------Q3------------------------");

function countEvenOdd(start, end) {
  var evencount = 0;
  var oddcount = 0;
  for (var k = start; k >= end; k--) {
    if (k % 2 == 0) {
      evencount++;
    } else {
      oddcount++;
    }
  }
  console.log(`Even count is : ${evencount}`);
  console.log(`Odd count is : ${oddcount}`);
}

countEvenOdd(60, 20);
