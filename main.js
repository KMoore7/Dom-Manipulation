document.getElementById("page-header")
document.getElementById("main-heading")
document.getElementById("para1")
document.getElementById("para2")
document.getElementById("para4")
document.getElementById("red")
document.getElementById("blue")
document.getElementById("yellow")
document.getElementById("green")
document.getElementById("black")


document.getElementById("main-heading").textContent = "New DOM Layout";
document.getElementById("page-header").classList.remove("bg-dark");
document.getElementById("page-header").classList.add("bg-success");

para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

const btn = document.getElementById('btn');
const oldText = document.getElementById('para4');

btn.addEventListener('click', function() {
  const insertNew = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
  oldText.innerHTML = insertNew;
});


document.getElementById("red").classList.remove("bg-white");
document.getElementById("red").classList.add("bg-danger");

document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");

document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");

document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");

document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");

document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");

document.getElementById("black").classList.remove("text-dark");
document.getElementById("black").classList.add("text-light");







