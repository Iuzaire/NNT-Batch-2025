const todoBox= document.querySelector('.todoBar');
const allList = document.querySelector(".alltodos");

let todoList = [];

function addtoDo(){

const obtValues = todoBox.value;

todoList.push(obtValues);
console.log(todoList);

for(let i=0 ; i<todoList.length; i++){

allList.innerHTML = todoList.join("<br>");
todoBox.value = '';
};

}









// function addtoDO(){

//   const name = todoBox.value;
//   todoList.push(name);

//   for(let i=1; i<todoList.length; i++){

//     console.log(todoList);
//     console.log("added [i] here: ", todoList[i]);
//     allList.innerHTML = todoList ;
//   }

//   todoBox.value = '';
// }