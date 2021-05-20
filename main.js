$(document).ready(function(){
    console.log("script cargado corrrectamente");

    // Variables
    // Containers
    var toDo = $("#toDo");
    var doing = $("#doing");
    var done = $("#done");
   
    // Lists
    var toDoList = $("#toDoList");
    var doingList = $("#doingList");
    var doneList = $("done");
   
    // Button
    var addButton = $("#add");

    // Add new Element
    addButton.click(function(){
        console.log('click');
        
        var newItem = window.prompt('Pleas add new task');

        if(newItem === null || newItem === ""){
            alert("PLease input a valid value!");
        }else{
            toDoList.append("<li>"+newItem+"</li>");
            var newTask = $("li").draggable();
        }
    })

    // Droppable
    toDo.droppable({
        drop: function(li){
            console.log("elemento droppeado en ToDo");
            console.log(li);
        }
    });
    doing.droppable({
        drop: function(){
            console.log("elemento droppeado en Doing");
        }
    });
    done.droppable({
        drop: function(){
            console.log("elemento droppeado en Done");
        }
    })
})