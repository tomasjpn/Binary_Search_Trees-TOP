import Tree from "./Tree.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = new Tree(arr);

tree.deleteItem(3);
tree.deleteItem(4);


tree.printTree();

const node = tree.find(8);
//console.log(node);

//console.log(tree.depth(node));

tree.isBalanced();