function Merge(items){
    var items = JSON.parse(window.localStorage.getItem('items'));
    var elementsArray = document.querySelectorAll('.element');
    console.log(mergeSort(items,elementsArray));
}

const merge = async (leftArray, rightArray,elementsArray) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let index = 0
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result[index] = leftArray[leftIndex];
            elementsArray[index].style.height = result[index] * 10 + 'px';
            await sleepForMerge(1)
            elementsArray[index].innerText = result[index];
            elementsArray[index].style.backgroundColor = 'yellow'
            leftIndex++;
            index++

        } else {
            result[index] = rightArray[rightIndex];
            elementsArray[index].style.height = result[index] * 10 + 'px';
            elementsArray[index].innerText = result[index];
            elementsArray[index].style.backgroundColor = 'red'
            rightIndex++;
            index++
        }
    }
    console.log(leftIndex, ' length ' , leftArray.length, 'array : ',leftArray )
    console.log(rightIndex, ' length ' , rightArray.length, 'array ', rightArray)
    if(leftIndex < leftArray.length){
        elementsArray[index++].style.height = leftArray[leftIndex++] * 10 + 'px';
        elementsArray[index].innerText = leftArray[leftIndex++] ;
    }else{
        elementsArray[index++].style.height = rightArray[rightIndex++] * 10 + 'px';
        elementsArray[index++].innerText = rightArray[rightIndex++];
    }

    return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));    
}

const mergeSort = async (array,elementsArray) => {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return await merge(await mergeSort(left,elementsArray), await mergeSort(right,elementsArray),elementsArray);
}
async function sleepForMerge(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}