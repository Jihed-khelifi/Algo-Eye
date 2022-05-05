const Selection = async () => {
    var items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items);
    var elementsArray = document.querySelectorAll('.element');
    await selectionSort(items,elementsArray);
}


const selectionSort = async (arr,elementsArray) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                elementsArray[min].style.backgroundColor = color;
                min = j;
                elementsArray[min].style.backgroundColor = 'yellow';
                await sleepForSelection(0.2)
            }
        }
        if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        ;
        elementsArray[i].style.height = arr[i] * 10 + 'px';
        elementsArray[i].innerText = arr[i];
        elementsArray[i].style.backgroundColor = color
        elementsArray[min].style.height = arr[min] * 10 + 'px';
        elementsArray[min].innerText = arr[min];
        elementsArray[min].style.backgroundColor = color
        await sleepForSelection(0.3)
        }
    }
    console.log(arr);
    }

    const sleepForSelection = async (s) =>  {
        return new Promise(resolve => setTimeout(resolve, s * 1000));
    }