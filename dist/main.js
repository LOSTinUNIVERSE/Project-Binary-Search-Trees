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

eval("/* eslint-disable max-classes-per-file */\nconst sortModule = () => {\n    class Node {\n        constructor(attr, leftChild, rightChild) {\n            this.attr = attr\n            this.leftChild = leftChild\n            this.rightChild = rightChild\n        }\n    }\n    class Tree {\n        constructor(array, root) {\n            this.root = root\n        }\n    }\n    const arrayNumbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]\n\n    const duplicatesRemoved = function removeDuplicates(array) {\n        return Array.from(new Set(array))\n    }\n\n    const newArray = duplicatesRemoved(arrayNumbers)\n\n    function merge(leftArray, rightArray) {\n        let leftIndex = 0\n        let rightIndex = 0\n        const result = []\n        let resultIndex = 0\n\n\n        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {\n            if (leftArray[leftIndex] < rightArray[rightIndex]) {\n                result[resultIndex] = (leftArray[leftIndex])\n                leftIndex++\n                resultIndex++\n            }\n            else {\n                result[resultIndex] = (rightArray[rightIndex])\n                rightIndex++\n                resultIndex++\n            }\n        }\n        while (leftIndex < leftArray.length) {\n            result[resultIndex] = leftArray[leftIndex];\n            leftIndex++;\n            resultIndex++;\n        }\n\n        while (rightIndex < rightArray.length) {\n            result[resultIndex] = rightArray[rightIndex];\n            rightIndex++;\n            resultIndex++;\n        }\n        return result\n    }\n    const mergeSort = function () {\n        if (array.length <= 1) { return array }\n        const mid = Math.floor(array.length / 2);\n        const leftHalf = array.slice(0, mid);\n        const rightHalf = array.slice(mid);\n\n        const sortedLeft = mergeSort(leftHalf);\n        const sortedRight = mergeSort(rightHalf);\n\n        return merge(sortedLeft, sortedRight)\n    }\n    const result = mergeSort(newArray)\n    console.log(result);\n    return { mergeSort, newArray }\n}\nsortModule()\n\n//# sourceURL=webpack://template/./src/index.js?");

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