import Node from "./Node.js";

export default class Tree{
    constructor(arr){
        this.inputArr = arr;
        this.root = this.buildTree(this.inputArr); // Die Wurzel 
    }

    // Konstruiert den Baum 
    buildTree(arr){
        if (arr.length === 0) return null; // Base Case -> Wenn das Array leer ist => return null

        const mid = Math.floor(arr.length / 2); // Mitte des Arrays
        const root = new Node(arr[mid]); // Mitte des Arrays = Wurzel des Baums

        root.left = this.buildTree(arr.slice(0, mid));
        root.right = this.buildTree(arr.slice(mid + 1));

        return root;
    }
    
    // Printet den Baum in einer grafischen Darstellung
    printTree(){
        const prettyPrint = (node, prefix = "", isLeft = true) => {
            if (node === null) {
              return; // Wenn der aktuelle Knoten = null -> das Ende des Zweigs erreicht
            }
            if (node.right !== null) { // Wenn rechter ChildNode existiert, rekursiver Auruf
              prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false); // prefix = für die richtige Einrückung für rechten Subtree || isLeft = false -> zeigt an, dass es sich um den rechten Kindknoten handelt
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`); // Aktueller Knoten wird ausgedrückt, je nachdem ob es sich um den Linken oder Rechten handelt
            if (node.left !== null) {
              prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
          };

          prettyPrint(this.root)
    }

    

}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(arr);
tree.printTree();