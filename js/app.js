let input;

function reset() {
  d3.selectAll("svg").remove();
}

function treeAndArray() {
  reset();
  let inputText = document.getElementById("array-input");
  document.querySelector("#visual-title").innerHTML = "Binary Tree And Array";
  document.querySelector("#instructions").innerHTML =
    "Click a value in the binary tree or array to highlight its corresponding location in the data structure.";
  if (inputText.value !== "") {
    input = inputText.value
      .trim()
      .split(/\s+|,+/g)
      .map((num) => parseInt(num));
    createBinaryTreeAndArr(input);
  }
}

function maxHeapify() {
  reset();
  let inputText = document.getElementById("array-input");
  if (inputText.value !== "") {
    input = inputText.value
      .trim()
      .split(/\s+|,+/g)
      .map((num) => parseInt(num));
    makeMaxHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById("instructions").innerHTML =
      "<p> Parent's value is always greater than or equal to the values of its children.</p>";
    document.getElementById("visual-title").innerHTML =
      "Max-Heap Binary Tree And Array";
  }
}

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  let tree = new Tree();
  tree.createBinaryTree(input);
  createArray(arr, 2, 30, 50, 50);
}

function createBinarySearchTree() {
  let inputText = document.getElementById("array-input");
  if (inputText.value !== "") {
    reset();
    input = inputText.value
      .trim()
      .split(/\s+|\,+/g)
      .map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    document.querySelector("#visual-title").innerHTML = "Binary Search Tree";
    document.querySelector("#instructions").innerHTML =
      "The input data sorted and arranged into a Binary Search Tree.";
    let tree = new Tree();
    tree.createBinarySearchTree(input);
  }
}

function minHeapify() {
  reset();
  let inputText = document.getElementById("array-input");
  if (inputText.value !== "") {
    input = inputText.value
      .trim()
      .split(/\s+|\,+/g)
      .map((num) => parseInt(num));
    let n = input.length;

    // Index of last non-leaf node
    let startIdx = Math.floor(n / 2) - 1;

    // Perform reverse level order traversal from last non-leaf node and heapify each node
    for (let i = startIdx; i >= 0; i--) {
      buildMinHeap(input, n, i);
    }
    createBinaryTreeAndArr(input);
    document.getElementById("instructions").innerHTML =
      "<p> Parent's value is always smaller than or equal to the values of its children.</p>";
    document.getElementById("visual-title").innerHTML =
      "Min-Heap Binary Tree And Array";
  }
}

function buildMinHeap(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
  }

  if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

      buildMinHeap(arr, n, smallest);
  }
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//default values
input = [10, 20, 60, 30, 70, 40, 50];
let inputTest = document.getElementById("array-input");
inputTest.value = input;
createBinaryTreeAndArr(input);
