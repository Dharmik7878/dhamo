// let marks = [45,65,78,66,90];
// console.log(marks)

// let bhagavan = ["ram", "mahadev", "krushana", "hanuman", "narayan"];
// console.log(bhagavan)

// for(let r=0; r<bhagavan.length; r++){
//     console.log(bhagavan[r])
// }
//-------------------------------------------------------------------------------
// let city=["ahmedabad","bhavnagar","giftcity","dholera","baroda"];
// for(let cities of city){
//     console.log(cities.toUpperCase());
// }
//-------------------------------------------------------------------------------
// let marks = [56,67,45,76,88];
// let sum = 0;
// for(let r of marks){
//     sum += r;
// }
// let avg=sum/marks.length;
// console.log(`avg of marks is:`,avg)
//-----------------------------------------------------------------------------------
// let item = [250,300,450,600,900];

// let i = 0;
// for(let val of item){
//     console.log(`the value at index ${i} = ${val}`)
//     let offer = val/10;
//     item[i]=item[i]-offer;
//     console.log(`after the offer ${item[i]}`);
//     i++;
// }
// console.log(item)
//--------------------------------------------------------------------------------------
// let food = ["potato", "apple", "litchi", "tomato"];
// let d = food.toString()
// console.log(d)
//---------------------------------------------------------------------
// let mh = ["thor", "ironman", "spiderman"];
// let dh = ["superman", "batman"];
// let ih = ["shakktiman", "krish"];
// let c = mh.concat(dh)
// console.log(mh.concat(dh,ih))
//--------------------------------------------------------------
// let mh = ['thor','ironman','spiderman'];

// mh.unshift('antman');
// console.log(mh)
//-----------------------------------------------------------------------
// let city=[1,2,3,4,5,6,7];
// city.splice(2,1,110)
// console.log(city)
//-------------------------------------------------------------
let com = ['bloomberg','microsoft','uber','google','ibm','netflix'];
com.shift()
console.log(com)
com.splice(2,1,'ola')
console.log(com)
com.push("amazon")
console.log(com)