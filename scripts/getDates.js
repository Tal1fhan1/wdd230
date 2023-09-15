const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

let oLastModif = new Date(document.lastModified);
document.querySelector("#modified").textContent = oLastModif;

