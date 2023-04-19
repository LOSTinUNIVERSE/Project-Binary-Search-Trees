/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable max-classes-per-file */\n\nconst arrayNumbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]\n\nconst duplicatesRemoved = function removeDuplicates(array) {\n    return Array.from(new Set(array))\n}\nconst newArray = duplicatesRemoved(arrayNumbers)\n\nfunction merge(leftArray, rightArray) {\n    let leftIndex = 0\n    let rightIndex = 0\n    const result = []\n    let resultIndex = 0\n\n\n    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {\n        if (leftArray[leftIndex] < rightArray[rightIndex]) {\n            result[resultIndex] = (leftArray[leftIndex])\n            leftIndex++\n            resultIndex++\n        }\n        else {\n            result[resultIndex] = (rightArray[rightIndex])\n            rightIndex++\n            resultIndex++\n        }\n    }\n    while (leftIndex < leftArray.length) {\n        result[resultIndex] = leftArray[leftIndex];\n        leftIndex++;\n        resultIndex++;\n    }\n\n    while (rightIndex < rightArray.length) {\n        result[resultIndex] = rightArray[rightIndex];\n        rightIndex++;\n        resultIndex++;\n    }\n    return result\n}\nconst mergeSort = function (array) {\n    if (array.length <= 1) { return array }\n    const mid = Math.floor(array.length / 2);\n    const leftHalf = array.slice(0, mid);\n    const rightHalf = array.slice(mid);\n\n    const sortedLeft = mergeSort(leftHalf);\n    const sortedRight = mergeSort(rightHalf);\n\n    return merge(sortedLeft, sortedRight)\n}\nconst finalResult = mergeSort(newArray)\n\nclass Node {\n    constructor(key) {\n        this.key = key\n        this.left = null\n        this.right = null\n    }\n}\n\nconst root = null\nfunction buildTree(array, start, end) {\n    if (start > end) { return null }\n    const mid = Math.floor((start + end) / 2)\n    const node = new Node(array[mid])\n    node.left = buildTree(array, start, mid - 1)\n    node.right = buildTree(array, mid + 1, end)\n    return node\n}\nconst n = finalResult.length\n\nclass Tree {\n    constructor(array, start, end) {\n        this.root = buildTree(array, start, end)\n    }\n}\nconst tree = new Tree(finalResult, 0, n - 1)\n\nfunction insert(node, key) {\n    if (node == null) {\n        node = new Node(key)\n        return node\n    }\n    if (key > node.key) return insert(node.right, key)\n    return insert(node.left, key);\n}\n// const inserted = insert(tree.root, 1)\n\nlet rootToDelete = null\nfunction deleteKey(key) {\n    rootToDelete = deleteRec(rootToDelete, key)\n}\nfunction minValue(root) {\n    let minv = root.key;\n    while (root.left != null) {\n        minv = root.left.key;\n        root = root.left;\n    }\n    return minv;\n}\nfunction deleteRec(root, key) {\n    if (root == null) return root;\n    console.log('l');\n    if (key < root.key) root.left = deleteRec(root.left, key);\n    else if (key > root.key) root.right = deleteRec(root.right, key);\n    else {\n        if (root.left == null) return root.right\n        if (root.right == null) return root.left\n        root.key = minValue(root.right);\n        root.right = deleteRec(root.right, root.key);\n    }\n    return root\n}\nconst deletedResult = deleteRec(tree.root, 8)\nconsole.log(deletedResult);\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;