let changeelement = document.createElement("button");
    changeelement.innerText = "submit";
    console.log(changeelement);

let placeholder = document.querySelector("#inputtext");
// placeholder.setAttribute("placeholder","username");
// console.log(placeholder);
placeholder.after(changeelement);
// console.log(placeholder);