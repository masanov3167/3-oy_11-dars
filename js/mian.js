// var numbers = [2,3,8,5,6,7];

// console.log(numbers[0]);
// console.log(numbers[1] > 0);

// for(var i=0; i<10; i++){
//     console.log(i);
// }

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// for (var raqam of numbers) {
//     console.log(raqam);
// }



// var nums = [0, -34, 2, 56, 4.5, 4, -5, 6];
// var emptyArray = [];

// function checknum(nums) {
//     for (var num of nums){
//         if(num < 0){
//             emptyArray.push(Math.abs(num));
//         }else{
//             emptyArray.push(Math.round(num))
//         }
//     }

//     return emptyArray;
// }

// console.log(checknum(nums));


// var dog = {
//     zoti : "afcharka",
//     nomi : "Rex",
//     yoshi : 10,
//     ovqat : ["sut", "go'sht", "non"],
//     bark : function () {
//         return "wow"
//     },
//     bollari : {
//         nomi : "tarzan",
//         ovqat : ["non", "sut"]
//     },
//     tirikmi : true,
// }

// console.log(dog.zoti);


// 1-masala 
var arr = [3,2,5,6];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
  
    console.log(`Arraydagi ${arr} sonlar bir-biriga qo'shilganda ${sum} bo'ladi!`);

}

arraySum(arr);


// 2-masala

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form-input");
var elButton = document.querySelector(".form-btn");
var elError = document.querySelector(".error");
var olList = document.querySelector("#list");
var arr = [];


// document.querySelector("container").appendChild(elForm);

elForm.addEventListener("submit" , function(e){
    e.preventDefault();

    var inputValue = elInput.value;
    
    var liItem = document.createElement("li");
    document.getElementById("list").appendChild(liItem);

    var todoObj = {
        son: arr.length,
        nom: inputValue,
        test: "!",
    }

    arr.push(todoObj); 
    // console.log(todoObj);

    // liItem.textContent = inputValue;

    
    for (var i = 0; i = arr.length; ++i){
        liItem.textContent = `${todoObj.son + 1} - ${todoObj.nom}`;
        elInput.value = "";
        return;
    }
   
});
