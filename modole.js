const myName="keren";
console.log(myName);
const num=5;
console.log(num);
const text ="efsvdf"
console.log(text);
const obj={n:"keren",k:"ds"}
console.log(obj.n);
console.log(obj.k);

const number=1;
const object={n:"kkkkkk",k:"hhhhhhhh"}
const t=true;
const text1="dfffffffffffffff";
console.log(number,object,t,text);
function Age(age) {
    console.log(age);
}

function getArray(array) {
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        sum=sum+array[index];
    }
    return sum;
}
// console.log(getArray([10,4,50,40,32,78]));
// Name();
export {myName,Age} ;
// export default {num,text,obj};
export {number,object,t,text1};
export default getArray;
