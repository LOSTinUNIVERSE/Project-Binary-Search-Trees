/* eslint-disable max-classes-per-file */

const arrayNumbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const arrayNumbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 1, 1, 1]

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

class Tree {
    constructor(array, start, end) {
        this.root = buildTree(array, start, end)
    }
}
const n = finalResult.length
const tree = new Tree(finalResult, 0, n - 1)
// console.log(tree);


function insert(node, key) {
    if (node == null) {
        return node
    }
    console.log(node);

    if (key > node.key) return insert(node.right, key)
    return insert(node.left, key);
}

function deleteRec(root, key) {
    if (root == null) { return root; }
    if (key < root.key) {
        root.left = deleteRec(root.left, key);
        return root
    }

    if (key > root.key) {
        root.right = deleteRec(root.right, key);
        return root
    }

    if (root.left == null) {
        const temp = root.right
        return temp
    }
    if (root.right == null) {
        const temp = root.left
        return temp
    }
    // eslint-disable-next-line no-else-return
    else {
        let succParent = root
        let succ = root.right
        while (succ.left != null) {
            succParent = succ
            succ = succ.left
        }

        if (succParent != root) {
            succParent.left = succ.right;
        }
        else { succParent.right = succ.right; }

        root.key = succ.key;

        return root;
    }
}
const deletedResult = deleteRec(tree.root, 8)

function findNode(node, key) {
    if (node == null) return node
    if (key > node.key) return findNode(node.right, key)
    if (key < node.key) return findNode(node.left, key)
    if (key == node.key) return node
}
const foundNode = findNode(tree.root, 7)


function breadthFirstSearch(root, visitFn = node => node.data) {
    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        if (current == null) continue;
        result.push(current.key)
        if (current.left != null) queue.push(current.left)
        if (current.right != null) queue.push(current.right)
    }
    return result
}
// const result = breadthFirstSearch(tree.root)
// console.log(result);

function inOrder(node, data = []) {
    if (node == null) return node
    inOrder(node.left, data)
    data.push(node.key)
    inOrder(node.right, data)
    return data
}

// console.log(inOrderData);


function preOrder(node, data = [], visitFn = node => node.key) {
    if (node == null) return node
    data.push(node.key)
    preOrder(node.left, data)
    preOrder(node.right, data)
    return data
}

// console.log(preOrderData);

function postOrder(node, data = [], visitFn = node => node.key) {
    if (node == null) return node
    postOrder(node.left, data)
    postOrder(node.right, data)
    data.push(node.key)
    return data
}

// console.log(postOrderData);
const counter = 0
const defineDepth = function (node, counter = 0) {
    if (node == null) return counter
    counter += 1
    if (node.left != null) defineDepth(node.left)
    if (node.right != null) defineDepth(node.right)
    // console.log(counter);
    return counter
}
// const depthOfNode = defineDepth(foundNode)
// console.log(depthOfNode);

let heightCounter = 0
function defineHeight(node, key) {
    if (node == null) return heightCounter
    heightCounter++
    if (key > node.key) return defineHeight(node.right, key)

    if (key < node.key) return defineHeight(node.left, key)

    if (key == node.key) return heightCounter
    return heightCounter
}
const heightOfNode = defineHeight(tree.root, 4)

function height(node) {
    if (node == null) return 0
    return Math.max(height(node.left), height(node.right)) + 1
}

const isBalanced = function (node) {
    if (node == null) return true
    const lh = height(node.left)
    const rh = height(node.right)

    if (Math.abs(lh - rh) <= 1 && isBalanced(
        node.left) == true && isBalanced(node.right) == true)
        return true

    return false

}


const balanceTree = function () {
    const orderData = inOrder(tree.root)
    console.log(orderData);
    const newTree = new Tree(orderData, 0, n - 1)
    return newTree
}
// const newTree = balanceTree()
const something = new Tree(finalResult, 0, n - 1)
console.log(isBalanced(tree.root));
// const postOrderData = postOrder(tree.root)
// const preOrderData = preOrder(tree.root)
// const inOrderData = inOrder(tree.root)
const nodeTOChange = insert(tree.root, 10)


