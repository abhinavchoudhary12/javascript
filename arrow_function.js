var sum=()=>console.log("single arrow function")
var sum1=()=>{
  console.log("multiple arrow function1")
  console.log("multiple arrow function2")
  console.log("multiple arrow function3")
}
var sum2=(num1,num2)=>{
let c=num1+num2
console.log("sum of two number is: "+c)
}
var sum3=(num1,num2)=>{return num1*num2}





sum()
sum1()
sum2(10,20)
console.log("miltiplication of two numbers is: "+sum3(10,5))