const textarea = document.getElementById('message');
const output = document.getElementById('output');
const button = document.getElementById('showBtn');


button.addEventListener('click', () => {
output.textContent = textarea.value;
textarea.value = ""; 
});