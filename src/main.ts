import './style.css'


// const theForm = document.getElementById("theForm") as HTMLFormElement;

// theForm.addEventListener("submit", handleSubmit);

// let toDo = JSON.parse(localStorage.getItem("toDo") || "[]" ) as TodoTask[];

// function saveList (){
//     localStorage.setItem("toDo", JSON.stringify(toDo));
// }

interface ToDoItem {
    text: string;
    done: boolean;
  }
  
  const toDo: ToDoItem[] = [];
  
  const toDoList = document.getElementById("toDoList") as HTMLUListElement;
  const addButton = document.getElementById("addButton") as HTMLButtonElement;
  const input = document.getElementById("input") as HTMLInputElement;
  
  // Förhindrar att sidan laddas om när du klickar på knappen i formuläret

  const form = document.getElementById("theForm") as HTMLFormElement;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  
  addButton.onclick = function () {
    const value = input.value.trim();
  
    if (value !== "") {
      // Lägg till i arrayen
      toDo.push({ text: value, done: false });
  
      // Skapa nytt <li>
      const item = document.createElement("li");
      item.textContent = value;
  
      // Lägg till i listan
      toDoList.appendChild(item);
  
      // Töm input
      input.value = "";
    }
  };
  


