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
console.log(tree);


function insert(node, key) {
    if (node == null) {
        node = new Node(key)
        return node
    }
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
const foundNode = findNode(tree.root, 9)

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
const result = breadthFirstSearch(tree.root)
// console.log(result);

function forDepthFirst(node, parent = 0) {
    if (node == null) return node
    const data = node.key
    console.log(data);
    console.log(tree);
    if (node == parent.left) { forDepthFirst(parent.right, node) }
    if (node == parent.right) { forDepthFirst(parent.left, node) }
    if (node.right == null) { forDepthFirst(parent.left, node) }
    if (node.left == null) { forDepthFirst(parent.right, node) }
    forDepthFirst(node.right, node)

}
// forDepthFirst(tree.root)