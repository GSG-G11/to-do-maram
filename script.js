// let todos =[];
let temp = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
let todos= [...temp];
document.getElementById('btn').addEventListener("click",function(e){
    e.preventdefult
    let title = document.getElementById('title');
    let des = document.getElementById('des');
    let time = document.getElementById('time');

    let obj = {
        'title':title.value,
        'des':des.value,
        'time':time.value,
    }
    todos.push(obj);
    localStorage.setItem("users", JSON.stringify(todos));

    

});

function render(){
    
}