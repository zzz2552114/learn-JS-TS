
let todolist = [];

function getInput(){
    let item = document.querySelector('.input-todo').value;
    todolist.push(item);
    add();
}
function add(){
    let printHtml = '';
    for(let i = 0;i<todolist.length;i++){
        printHtml += `<p>
${todolist[i]}
<button onclick='todolist.splice(${i},1);add()')'>Delete</button>
</p>`;
    }
    document.querySelector("#print").innerHTML = printHtml;
    document.querySelector('.input-todo').value = '';
}
