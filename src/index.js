/* eslint-disable max-classes-per-file */
class Node {
    constructor(attr, leftChild, rightChild) {
        this.attr = attr
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}
class Tree {
    constructor(array, root) {
        this.root = root
    }
}
const arrayNumbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const duplicatesRemoved = function removeDuplicates(array) {
    return Array.from(new Set(array))
}

const newArray = duplicatesRemoved(arrayNumbers)

function merge(leftArray, rightArray) {
    let leftIndex = 0
    let rightIndex = 0
    const result = []
    let resultIndex = 0


    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result[resultIndex] = (leftArray[leftIndex])
            leftIndex++
            resultIndex++
        }
        else {
            result[resultIndex] = (rightArray[rightIndex])
            rightIndex++
            resultIndex++
        }
    }
    while (leftIndex < leftArray.length) {
        result[resultIndex] = leftArray[leftIndex];
        leftIndex++;
        resultIndex++;
    }

    while (rightIndex < rightArray.length) {
        result[resultIndex] = rightArray[rightIndex];
        rightIndex++;
        resultIndex++;
    }
    return result
}
const mergeSort = function (array) {
    if (array.length <= 1) { return array }
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight)
}


const result = mergeSort(newArray)
console.log(result)