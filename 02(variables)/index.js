/*
let a = 221;
var b =  a -5;
a = 4;
console.log(b, a);
*/

/*
const what = "jintae";
console.log(what);
*/

/*
const what = true; // ture == 1 , false == 0
*/

/*const what = 55.1;
*/

/*
//array
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true,123.2];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);
*/

//object
const JintaeInfo = {
    name:"Jintae",
    age : 27,
    gender : "Male",
    isHandsome : true,
    favMovies : ["Along the gods", "LOTR","Oldboy"],
    favFood : [
        {
            name:"Kimchi", fatty : false
        },
        {
            name : "Cheese burger", fatty : true
        }
    ]
};

//changing Object is not possible
/*
JintaeInfo = ture;
*/
JintaeInfo.gender="Female";

console.log(JintaeInfo.gender);
console.log(JintaeInfo);