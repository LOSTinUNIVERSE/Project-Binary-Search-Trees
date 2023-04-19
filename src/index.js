/* eslint-disable max-classes-per-file */

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
const finalResult = mergeSort(newArray)

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor(array) {
        this.root = array
    }
}
const root = null
function buildTree(array, start, end) {
    if (start > end) { return null }
    const mid = Math.floor((start + end) / 2)
    const node = new Node(array[mid])
    node.left = buildTree(array, start, mid - 1)
    node.right = buildTree(array, mid + 1, end)
    return new Tree(node)
}
const n = finalResult.length
const resultedTree = buildTree(finalResult, 0, n - 1)
console.log(resultedTree);

