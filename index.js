import Tree from "./Tree.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = new Tree(arr);

tree.deleteItem(3);
tree.deleteItem(4);

console.log(tree.find(324));
tree.printTree();

//const result = tree.levelOrder((node)=>{
    //console.log(node);
//});
//console.log(result);

console.log(tree.postOrder());