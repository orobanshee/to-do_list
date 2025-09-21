const textArea = document.getElementById("placeNewTask");
const buttonNewTask = document.getElementById("btnNewTask");
const listGroup = document.getElementById("list");
const listElement = document.getElementsByClassName("element-list");
const buttonDeleteTask = document.getElementsByClassName("btn-close");

buttonNewTask.addEventListener ('click', () => {
    event.preventDefault()
    const addNewTask = function () {
    
    if (textArea.value.trim() === '') {
        alert('nothing')
        
        return ;

    } else {

        const newLi = document.createElement('li');
        newLi.classList.add("element-list");

        const newTaskText = document.createElement('a');
        newTaskText.setAttribute("href" , '#!')
        newTaskText.classList.add('task-text');
        newTaskText.textContent =  textArea.value;

        const bntDelete = document.createElement('button');
        bntDelete.classList.add('btn-close');
        bntDelete.setAttribute('aria-label', 'Close')

        newLi.appendChild(newTaskText);
        newLi.appendChild(bntDelete);

        listGroup.appendChild(newLi);

    }
}   
        addNewTask();
});

    


