var dates = new Date().toString().split(" ").splice(0, 4).join(" ");

window.addEventListener("load", function time() {
  document.getElementById("today").innerHTML = dates;
});

var task = document.querySelector("#tasks");

var submit = document.querySelector(".btn");
var rightside = document.querySelector(".right-side");
var taskarray = [];
count = 0;
var erase = document.querySelector(".fa-trash");
taskarray.forEach(
  submit.addEventListener("click", function submit() {
    if (task.value === "") {
      alert("Please enter a task.");
    } else taskarray.push(task.value);
    /*console.log(taskarray);
    last = taskarray.slice(-1);*/

    arrayLength = taskarray.length;
    var holder = "";

    for (count = 0; count <= arrayLength - 1; count++) {
      var list = taskarray[count];
      holder += "<li>" + list + "<i class='fas fa-trash'></i> </li>";
      document.forms["myform"].reset();
    }

    rightside.innerHTML = holder;

    /*erase.addEventListener("click", function erase() {
      console.log(taskarray[count]);
      console.log(taskarray);
    });*/
  })
);

/*
var i=0;
for(i=0; i<taskarray.length(-1); i++){
   submit.addEventListener("click", function submit(){
      taskarray.push(i);
      console.log(taskarray);
     
     rightside.innerHTML=i;
})
};*/
//<i class="fa-solid fa-paper-plane"></i>
