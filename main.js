const Ap = [["A+", "AB+"], ["A+", "A-", "O+", "O-"]];
const Am = [["A+", "A-", "AB+", "AB-"], ["A-", "O-"]];
const Bp = [["B+", "AB+"], ["B+", "B-", "O+", "O-"]];
const Bm = [["B+", "A-", "AB+", "AB-"], ["B-", "O-"]];
const ABp = [["AB+"], ["Everyone"]];
const ABm = [["AB+", "AB-"], ["AB-", "A-", "B-", "O-"]];
const Op = [["O+", "A+", "B+", "AB+"], ["A+", "O-"]];
const Om = [["Everyone"], ["O-"]];

const giveList = document.querySelector(".give .list");
const receiveList = document.querySelector(".receive .list");
const submit = document.querySelector(".show_btn");
const reset = document.querySelector(".reset_btn");
const result_box = document.querySelector(".result_box");
const types = document.querySelectorAll("input[type='button']");


// Selecting Blood Type
let selected;
types.forEach(btn => {
   btn.onclick = function() {
      types.forEach(btn => {
         btn.classList.remove("active");
      });
      btn.classList.add("active");
      selected = btn.value;
   }
});

// Getting Result
submit.onclick = function() {
   if(selected === undefined) {
      return alert("Select A Blood Type!");
   }
   types.forEach(btn => {
      btn.style.cursor = "inherit";
      btn.disabled = true;
   })
   
   // Filling Lists in HTML
   let blood_list;
   switch (selected) {
      case "O+":
         blood_list = Op;
         break;
      case "O-":
         blood_list = Om;
         break;
      case "A+":
         blood_list = Ap;
         break;
      case "A-":
         blood_list = Am;
         break;
      case "B+":
         blood_list = Bp;
         break;
      case "B-":
         blood_list = Bm;
         break;
      case "AB+":
         blood_list = ABp;
         break;
      case "AB-":
         blood_list = ABm;
         break;
      }

   for(let i=0; i<blood_list[0].length; i++) {
      let span = document.createElement("span");
      span.append(blood_list[0][i]);
      giveList.append(span);
   }
   for(let i=0; i<blood_list[1].length; i++) {
      let span = document.createElement("span");
      span.append(blood_list[1][i]);
      receiveList.append(span);
   }

   // Showing Results
   result_box.style.display = "block";
   reset.style.display = "block";
   submit.style.display = "none";
}

// Reseting
reset.onclick = function() {
   types.forEach(btn => {
      btn.classList.remove("active");
      btn.style.cursor = "pointer";
      btn.disabled = false;
   });
   result_box.style.display = "none";
   reset.style.display = "none";
   submit.style.display = "block";
   receiveList.innerHTML = "";
   giveList.innerHTML = "";
}