async function Insertion(){
    var items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items);
    var elementsArray = document.querySelectorAll('.element');
    await insertionSort(items,elementsArray);
}

const insertionSort = async (arr,elementsArray) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            arr[j + 1] = arr[j];
            elementsArray[j + 1].style.height = arr[j + 1] * 10 + 'px';
            elementsArray[j + 1].innerText = arr[j + 1];
            elementsArray[j + 1].style.backgroundColor = color
            await sleepForInsertion(0.2)
            j = j - 1;
        }
        arr[j + 1] = key;
        elementsArray[j + 1].style.height = arr[j + 1] * 10 + 'px';
        elementsArray[j + 1].innerText = arr[j + 1]
    }
    console.log(arr);
}
const sleepForInsertion = async (s) =>  {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}