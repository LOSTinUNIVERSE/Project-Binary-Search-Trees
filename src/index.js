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
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

const root = null
function buildTree(array, start, end) {
    if (start > end) { return null }
    const mid = Math.floor((start + end) / 2)
    const node = new Node(array[mid])
    node.left = buildTree(array, start, mid - 1)
    node.right = buildTree(array, mid + 1, end)
    return node
}
const n = finalResult.length

class Tree {
    constructor(array, start, end) {
        this.root = buildTree(array, start, end)
    }
}
const tree = new Tree(finalResult, 0, n - 1)

function insert(node, key) {
    if (node == null) {
        node = new Node(key)
        return node
    }
    if (key > node.key) return insert(node.right, key)
    return insert(node.left, key);
}
// const inserted = insert(tree.root, 1)

let rootToDelete = null
function deleteKey(key) {
    rootToDelete = deleteRec(rootToDelete, key)
}
function minValue(root) {
    let minv = root.key;
    while (root.left != null) {
        minv = root.left.key;
        root = root.left;
    }
    return minv;
}
function deleteRec(root, key) {
    if (root == null) return root;
    console.log('l');
    if (key < root.key) root.left = deleteRec(root.left, key);
    else if (key > root.key) root.right = deleteRec(root.right, key);
    else {
        if (root.left == null) return root.right
        if (root.right == null) return root.left
        root.key = minValue(root.right);
        root.right = deleteRec(root.right, root.key);
    }
    return root
}
const deletedResult = deleteRec(tree.root, 8)
console.log(deletedResult);
