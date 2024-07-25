import Tree from "./Tree.js";

// Generiert ein Array mit zufälligen Zahlen
const arrGenerator = (generatedArr = []) =>{
    if (generatedArr.length === 100) return generatedArr;

    const num = Math.floor(Math.random()*100);
    generatedArr.push(num);
    return arrGenerator(generatedArr);
}

const newArr = arrGenerator();
console.log("Generated Array:", newArr);


const tree = new Tree(newArr);

// Überprüfe, ob der Baum balanciert ist
console.log("Ist der Baum balanciert?");
tree.isBalanced();

// Führt verschiedene Traversierungen durch und druckt den Baum
console.log("In-Order Traversierung:");
console.log(tree.inOrder());
tree.printTree();

console.log("Pre-Order Traversierung:");
console.log(tree.preOrder());
tree.printTree();

console.log("Post-Order Traversierung:");
console.log(tree.postOrder());
tree.printTree();

console.log("Level-Order Traversierung:");
console.log(tree.levelOrder());
tree.printTree();


// Balance vom Baum wird gestört
const unbalancingNums = [150, 200, 250, 300, 350, 400];
unbalancingNums.forEach(num => {tree.insert(num)});

// Erwartet: unbalanced
tree.isBalanced();

//Rebalance
tree.rebalance();

// Erwartet: balanced
tree.isBalanced();