import { trying } from "./SortFunctions/QuickSort";

trying();

const mainWrapper = document.querySelector('.main-wrapper')

const elements = document.querySelector('.elements');
const generate = document.querySelector('.generate-button');
generate.addEventListener('click',generateArray);

function generateArray() { 
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
        element.style.width = (50 / items.length ) * 10  + 'px';
        element.innerText = items[i];
    }
    window.localStorage.clear();
    window.localStorage.setItem('items', JSON.stringify(items));
    console.log(items);
 }
async function sort(items){
    var items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items);
    var elementsArray = document.querySelectorAll('.element');
    await quickSort(items, 0, items.length - 1,elementsArray);
    
}

async function placeElement(leftIndex, rightIndex,elementsArray,items) {
    elementsArray[leftIndex].style.height = items[leftIndex] * 10 + 'px';
    elementsArray[leftIndex].innerText = items[leftIndex];
    elementsArray[leftIndex].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log("here")
    await sleep(0.5)
    elementsArray[rightIndex].style.height = items[rightIndex] * 10 + 'px';
    elementsArray[rightIndex].innerText = items[rightIndex];
    elementsArray[rightIndex].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

async function partition(items, left, right,elementsArray) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right;//m//right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            await placeElement(i, j,elementsArray,items);
            i++;
            j--;
        }
    }
    return i;
}

async function quickSort(items, left, right,elementsArray) {
    var index;
    
    if (items.length > 1) {
        index = await partition(items, left, right,elementsArray); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(items, left, index - 1,elementsArray);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(items, index, right,elementsArray);
        }
    } 
}
// first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

async function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function openTab(){
    tab = document.querySelector('.wrapper');
    tab.classList.toggle('open-tab');
    
}