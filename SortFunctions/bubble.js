async function Bubble(){
    var items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items);
    var elementsArray = document.querySelectorAll('.element');
    await bubbleSort(items,elementsArray);
}

const bubbleSort = async (arr,elementsArray) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            elementsArray[i].style.height = arr[i] * 10 + 'px';
            elementsArray[i].innerText = arr[i];
            elementsArray[i].style.backgroundColor = color
            elementsArray[i + 1].style.height = arr[i + 1] * 10 + 'px';
            elementsArray[i + 1].innerText = arr[i + 1];
            elementsArray[i + 1].style.backgroundColor = color
            await sleepForBubble(0.3)
            swapped = true;
        }
        }
    } while (swapped);
    console.log(arr);
}

const sleepForBubble = async (s) =>  {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}
