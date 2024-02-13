
// declaration of the function
const printHello = () => {
  console.log("hello world");
};

// calling the function
printHello();


const sayHelloTenTimes =(nTimes) =>{
    for (let i = 0; i < nTimes; i++) {
        console.log("hello");
        
    }

}

sayHelloTenTimes (10);

const multy = (num1,num2) =>{
    return num1 * num2;
}

let result = multy(10,89);
console.log(result);