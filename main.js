const btn =  document.querySelector('.btn-sort')
const elements = document.querySelector('.elements');
const sortingTypes = document.querySelector('.list');
const generate = document.querySelector('.generate-button');

generate.addEventListener('click',generateArray);
sortingTypes.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        btn.innerText = e.target.innerText;
        btn.setAttribute('onclick', `${e.target.innerText}()`);
    }
});

function generateArray(event) { 
    event.preventDefault();
    const arraySize = document.querySelector('#size').value;
    var items = [];
    for(let i = 0; i < parseInt(arraySize); i++){
        temp = Math.floor(Math.random() * 40) + 1
        while(items.indexOf(temp) != -1){
            temp = Math.floor(Math.random() * 40) + 1
        }
        items[i] = temp;
    }
    var child = elements.lastElementChild; 
    while (child) {
        elements.removeChild(child);
        child = elements.lastElementChild;
    }
    for(let i = 0; i < items.length; i++){
        const element = document.createElement('div');
        elements.appendChild(element)
        element.classList.add('element');
        element.style.height = items[i] * 10 + 'px';
        element.style.width = (50 / items.length ) * 20  + 'px';
        element.innerText = items[i];
    }
    window.localStorage.clear();
    window.localStorage.setItem('items', JSON.stringify(items));
    console.log(items);
 }
 function openTab(){
    tab = document.querySelector('.wrapper');
    tab.classList.toggle('open-tab');
}