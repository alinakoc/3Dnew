const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click',()  => {
const onoff = toggle.parentNode.querySelector('.onoff')
onoff.textContent=toggle.checked ? 'ARKA':'ÖN'
})


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

