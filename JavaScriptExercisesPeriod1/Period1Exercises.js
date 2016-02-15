var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var moreThanThree = names.filter(function (lol){
    return lol.length <= 3;
});
console.log(moreThanThree);


var upper = names.map(function(lol){
    return lol.toUpperCase();
});
console.log(upper);

//--------------2-----------------

function myFilter(array, filter){ //filter er en callbackfunktion
    var result = []; //resultarray oprettes, da myFilter skal returnere et array

    for (var i = 0; i < array.length; i++){
        if (filter(array[i])){ //Hvis det vi giver med ind i callbackfunktionen er true, pushes det til arrayet.
            result.push(array[i]);
        }
    }

    return result;
}

var filtered = myFilter(names, function(name){ //names-arrayet og callback-funktionen gives med som parametre til filtret
    return name.length <= 3; //her bestemmes hvad der skal filtreres på, hvilket bliver vurderet true eller false i myFilter
})

console.log(filtered)

//-------------2------------------

function myMap(array, callback){

    var result = [];

    for(var i = 0; i < array.length; i++){
        result.push(callback(array[i]));
    }
    return result;
}

var mapped = myMap(names, function(name){
    return name.toUpperCase();
});

console.log(mapped)

//--------------3-----------------

Array.prototype.myMap = function(callback){

    var result = [];
    var array = this;

    for(var i = 0; i < array.length; i++){
        result.push(callback(array[i]));
    }
    return result;
}


var upper = names.myMap(function(lol){
    return lol.toUpperCase();
});
console.log(upper);

//--------------4-----------------

var a = [1,2,3];
var b = [1,2,3];

function handleNumArrays(a1, a2, callback){

    var res = [];

    for (var i = 0; i < a1.length; i++){
        res.push(a1[i] + a2[i]);
    }
    return callback(res);
}

handleNumArrays(a,b,function(res){
    console.log(res.join(","));
});

handleNumArrays(a,b,function(res){
    var result = 0;
    for (var i = 0; i < res.length; i++){
        result = result + res[i];
    }
    console.log(result);
});

handleNumArrays(a,b,function(res){
    var times10 = "";
    for(var i = 0; i < res.length; i++){
        times10 = times10 + res[i] * 10 + ",";
    }
    console.log(times10.substring(0,times10.length-1))
});

//--------------HOISTING-----------------

console.log(add(2,3)); //funktionen add bliver hoisted, og derfor kan vi kalde den inden vi angiver den.
function add(a, b){
    return a + b;
}

console.log(res);
var res = add(2, 3); //variablen res bliver hoisted, men ikke det vi sætter den lig med. Derfor får vi "undefined".
function add(a, b){
    return a + b;
}

//--------------THIS-----------------

function wrapper() {

    someText = "heyheyhey";
    var obj = {someText: "yoyoyo"};


    function logToConsole() {
        console.log(this.someText);
    }
    logToConsole();
    logToConsole.call(obj);
}
wrapper();

someText = "heyheyhey";

function wrapper2(){

    var obj = {someText: "yoyoyo", logToConsole: logToConsole};

    function logToConsole() {
        console.log(this.someText);
    }
    obj.logToConsole();
    logToConsole();
}
wrapper2();


function wrapper3(){

    lol = "lol";

    console.log(this.lol)

}
wrapper3();

//--------------IIFE-----------------

function wrapperIIFE(){

    var someText = "blablabla";

    (function(){
        var someText = "hehehe"; //Vi laver et lokalt scope, som køres med det samme..
        console.log(someText);
    })();

    console.log(someText);

}
wrapperIIFE();

//--------------OBJECTS ex 1-----------------

var obj = {
    firstName: "firstname",
    lastname: "lastname",
    age: 22,
    hobby: "stuff"
}

Object.keys(obj).forEach(function(key, value){
    console.log(key)
})

delete obj.hobby

Object.keys(obj).forEach(function(key, value){
    console.log(key)
})

console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("lol"));

//--------------OBJECTS ex 2-----------------

function Person(firstName, lastName, age)
{   this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getInfo = function(){
        return "firstname: " + firstName + ", lastname: " + lastName + ", age: " + age
    }

}

var nico = new Person("nicolai", "harbo", 29);
console.log(nico.getInfo());

//--------------OBJECTS ex 3-----------------

function listAllProperties(o){
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

console.log(listAllProperties(obj));

//VI har lige slettet en property fra et objekt i sidste opgave?? Giver ingen mening....

//--------------CLOSURES-----------------

