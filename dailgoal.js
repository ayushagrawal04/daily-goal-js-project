const myinput = document.getElementById("myInput");
const writegoal = document.getElementById("writegoal");
const mybtn = document.getElementById("myBtn");
const form = document.querySelector("form");
const container1 = document.querySelector(".container1");

// ----------now ham dekhenge kasie sab ek array mein store karayaenge
const tasks = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];
showalltasks();

function showalltasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const para = document.createElement("p");
    para.innerText = value.title;
    innerdiv.append(para);

    const span = document.createElement("span");
    span.innerText = value.goal;
    innerdiv.append(span);

    const button = document.createElement("button");
    button.setAttribute("class", "deleteBtn");
    button.innerText = "-";
    button.addEventListener("click", () => {
      removetasks();
      tasks.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(tasks));

      showalltasks();
    });

    div.append(button);

    container1.append(div);
  });
}

//   ham chahte h ki array ka size bade but purana wala delete ho jaye so removefunction banayege

function removetasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  removetasks();
  tasks.push({
    title: myinput.value,
    goal: writegoal.value,
  });

  localStorage.setItem("task", JSON.stringify(tasks));

  showalltasks();
  myinput.value = "";
  writegoal.value = "";
});


