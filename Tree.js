import Node from "./Node.js";

export default class Tree{
    constructor(arr){
        const uniqueArr = [...new Set(arr)].sort((a, b) => a - b); // new Set -> entfernt Duplikate , sort -> sortiert aufsteigend die Elemente
        this.inputArr = uniqueArr;
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

    insert(value){

      let updatedTree = this.root;

      if (updatedTree === null){
        this.root = new Node(value);
        return;
      }

      // Fügt einen neuen Eintrag in den Baum
      while (true){
        if (value < updatedTree.data){ // Einfügen in den linken Zweig
          if (updatedTree.left === null){ // Wenn der Zweig = null -> Ende des Zweig erreicht
            updatedTree.left = new Node(value);
            return;
          } else { // Traversierung, wenn an den Zweig Einträge vorhanden sind
            updatedTree = updatedTree.left;
          }
        } else { // Einfügen in den rechten Zweig
          if (updatedTree.right === null){
            updatedTree.right = new Node(value);
            return;
          } else {
            updatedTree = updatedTree.right;
          }
        }
      }
    }

    // Findet den kleinsten Knoten im Baum
    findMin(node){
      while (node.left !== null){
        node = node.left;
      }
      return node;
    }


    deleteNode(root, value){
      // Base-Case
      if (root === null) return root; // Wenn der Knoten = null -> Ende des Baums

      // Findet durch Rekursion die richtige Position im Baum
      if (value < root.data){ // links traversiert er bis zum Ende
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.data){ // rechts -||-
        root.right = this.deleteNode(root.right, value);
      } else { // Wenn der aktuelle Knoten den zu löschenden Wert enthält

        // Wenn der Knoten nur ein Child-Node hat
        if (root.left === null) return root.right; // aktueller Knoten wird durch den rechten Knoten erstzt
        if (root.right === null) return root.left; // aktueller Knoten wird durch den linken Knoten ersetzt
        
        // Wenn der Knoten zwei Child-Nodes hat
        const temp = this.findMin(root.right); // findet den minimalsten Wert auf der rechten Seite -> da der nächstgrößte Wert des zu löschenden Knoten gesucht wird: Inorder Successor
        root.data = temp.data; // aktueller Knoten wird durch den minimalsten Wert ersetzt
        root.right = this.deleteNode(root.right, temp.data); // löscht den Knoten, der jetzt an stelle des zu löschenden Knoten steht
      }

      return root;
    }

    // Löscht den eingegebenen Wert
    deleteItem(value){
      this.root = this.deleteNode(this.root, value); // Fängt bei der Wurzel an
    }


}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(arr);
tree.deleteItem(3);
tree.deleteItem(4);

tree.printTree();