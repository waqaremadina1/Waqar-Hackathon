function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,

        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "display-toast",
        onClick: function () { } // Callback after click
    }).showToast();
}

let users=[
    {
        email: "ar8431456@gmail.com",
        password: "mani1234"

    },
    {
        email: "abc@gmail.com",
        password: "1234"

    },
    {
        email: "def@gmail.com",
        password: "9876"

    }
]


function handleUserLogin(){
    
    let loginEmail=document.getElementById('login-email').value
    let loginPassword=document.getElementById('login-password').value
    let userFound=false

    if(loginEmail==="" || loginPassword==""){
        showToast('Please Enter Credentials')
        return
    }
    for(let i=0;i<users.length;i++){

        if(users[i].email==loginEmail && users[i].password==loginPassword){
            userFound=true
            showToast(`Welcome ${loginEmail}`)
            break;
        }
        
        
    }

    if(userFound==false){
        showToast('User Not Found')
        
    }


}

function handleUserRegister(){
    let registerEmail=document.getElementById('register-email').value
    let registerPassword=document.getElementById('register-password').value
    let alreadyRegistered=false
    
    if(registerEmail==="" || registerPassword==""){
        showToast('Please Enter Credentials')
        return
    }
    else{
        for(let i=0;i<users.length;i++){

            if(users[i].email==registerEmail && users[i].password==registerPassword){
                showToast('Already Registered')
                alreadyRegistered=true
                break;
            }
            
        }
    }
    

    if(alreadyRegistered===false){
        let newUser={
            email:registerEmail,
            password:registerPassword
        }
        showToast('Registration Successful')

        users.push(newUser)
    }



}

function toggleRegisterPage(){
    console.log('hello')
    
    document.getElementById('LOGIN-FORM').style.display="none"
    document.getElementById('REGISTER-FORM').style.display="block"


} 
function toggleLoginPage(){
    console.log('hello')
    
    document.getElementById('REGISTER-FORM').style.display="none"
    document.getElementById('LOGIN-FORM').style.display="block"


} 


let todos = [
    { title: "Title 1", date: new Date(), id: 1 , description:"I want to drive a car",  isCompleted: false },
    { title: "Title 2", date: new Date(), id: 2 , description:"I want to buy a house", isCompleted: false },
    { title: "Title 3", date: new Date(), id: 3 , description:"I want to do some chores", isCompleted: false },
  ];
  
  document.getElementById("create-todo").addEventListener("click", createTodo);
  document.getElementById("read-todos").addEventListener("click", readTodos);
  document.getElementById("update-todo").addEventListener("click", updateTodo);
  document.getElementById("delete-todo").addEventListener("click", deleteTodo);
  document.getElementById("show-table").addEventListener("click", showTable);
  
  function createTodo() {
    const newTodo = { title: document.getElementById("title").value, date: document.getElementById("date").value, id: todos.length+1, description: document.getElementById("description").value , isCompleted: false };
    todos.push(newTodo);
    console.log(todos);
  }
  
  function readTodos() {
    console.log(todos);
  }
  
  function updateTodo() {
    const todoToUpdate = todos.find((todo) => todo.title === "Title 2");
    todoToUpdate.isCompleted = true;
    console.log(todos);
  }
  
  function deleteTodo() {
    const todoToDelete = todos.find((todo) => todo.title === "Title 3");
    const index = todos.indexOf(todoToDelete);
    todos.splice(index, 1);
    console.log(todos);
  }
  
  function showTable() {
    const todoList = document.getElementById("todo-list");
    todos.forEach((todos) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${todos.title}</td>
        <td>${todos.date.toLocaleDateString()}</td>
        <td>${(link)}</td>
      <td>${todo.isCompleted ? "Yes" : "No"}</td>
      `;
      todoList.appendChild(row);
    });
  }