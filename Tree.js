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

    // Fügt einen neuen Eintrag in den Baum
    insert(value){

      let updatedTree = this.root;

      if (updatedTree === null){
        this.root = new Node(value);
        return;
      }

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


    // Sucht anhand des Wertes, den entsprechenden Knoten
    find(value){
      let node = this.root; 
      let input = value;


      const findPos = (node, value) =>{
        if (node === null) return null; // Base-Case: Wenn Node null => return null
        if (value === node.data) return node; // Wenn der Knoten gefunden wurde -> return 

        if (value < node.data){ 
          return findPos(node.left, value); // Durchläuft rekursiv den linken Subtree
        } else if (value > node.data){
          return findPos(node.right, value); // Durchläuft rekursiv den rechten Subtree
        }
      }

      return findPos(node, input);
    }

    // Breitensuche (breadth-first level order)
    levelOrder(callback){

      let node = this.root; // Anfangspunkt: Wurzel wird als Node festgelegt
      if (node === null) return; // Base-Case: Wenn Node null -> aufhören
      
      let queue = []; // Qeue um die Zwischenwerte zu speichern
      let result = [];

      queue.push(node); // Anfangswert: Wurzel wird in die Qeue gesetzt

      while (queue.length > 0){ // Solange die Queue nicht leer ist, bleibt die Ausführung aktiv
        node = queue.shift(); // Node = Erster Wert in der Queue, der ebenfalls zu entfernen ist || Hier passiert quasi auch die Traversierung

        if (callback){ // Wenn eine Callback vorhanden ist, wird der ausgeführt
          callback(node); 
        } else{ // ansonsten wird ein Array mit den Werten ausgegegeben
          result.push(node.data)
        }

        // Die Queue wird mit jeweils den Childnodes des aktuellen Nodes gefühlt
        if (node.left !== null){
          queue.push(node.left)
        }
        if (node.right !== null){
          queue.push(node.right)
        }
      }

      return callback ? null : result; // Wenn es einen Callback gab, wird null returned, ansonsten das ResultArr
    }

    // InOrder Traversierung
    inOrder(callback){
      let resultArr = []; 

      const traverse = (node) => { // Traversierung durch Rekursion
        if (node === null) return; // Base-Case: wenn am untersten Ende angekommen

        traverse(node.left); // Zuerst den linken Teilbaum
        if (callback){ // Ausgeben des Wertes
          callback(node);
        } else{
          resultArr.push(node.data);
        }
        traverse(node.right); // Rechten Teilbaum
      }

      traverse(this.root);

      return callback ? null : resultArr;
      
    }

    // PreOrder Traversierung
    preOrder(callback){
      let resultArr = [];

      const traverse = (node) => {
        if (node === null) return;
        
        if (callback){ // Wert wird direkt augegeben
          callback(node);
        } else {
          resultArr.push(node.data);
        }

        traverse(node.left); // Linken Teilbaum
        traverse(node.right); // Rechten Teilbaum
      }
      traverse(this.root);
      return callback ? null : resultArr;
    }

    //PostOrder Traversierung
    postOrder(callback){
      let resultArr = [];

      const traverse = (node) =>{
        if (node === null) return;

        traverse(node.left);
        traverse(node.right);

        if (callback){
          callback(node);
        } else {
          resultArr.push(node.data);
        }
      }
      traverse(this.root);
      return callback ? null : resultArr;
    }

    // Berechnet die Höhe eines Knotens
    height(node){
      // Base-Case: return -1 -> Da sonst die Blätter = 1, aber sollen ja 0 sein
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Die Höhe eines Knotens wird durch den längsten Pfad zu einem Blattknoten bestimmt
    return 1 + Math.max(leftHeight, rightHeight); // +1 -> um den aktuellen Knoten miteinzubeschließen und Math.max -> den größten Teilbaum zu finden
    }

    // Berechnet die Tiefe eines Knotens
    depth(node){
      if (node === null) return 0;
      
      const leftHeight = this.depth(node.left);
      const rightHeight = this.depth(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    // Überprüft, ob der Baum balanciert (jeweils rechter sowie linker Teilbaum um max 1 unterscheiden) ist
    isBalanced(){
      let node = this.root;

      const traverse = (node) =>{
        if (node === null) return { height: -1, balanced: true }; // Leerer Knoten hat die Höhe -1 = balanciert

        const left = traverse(node.left); // Objekt left
        const right = traverse(node.right); // Objekt right

        const height = 1 + Math.max(left.height, right.height); // Höhe des aktuellen Knotens berechnen -> Diese Methode zählt die Höhe von diesem Knoten bis zum tiefsten Blattknoten

        // Ein Knoten ist balanciert, wenn beide Teilbäume balanciert sind und die Differenz der Höhen der Teilbäume nicht mehr als 1 beträgt.
        const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1; 

        return { height, balanced };
      }

      const result = traverse(node);
      if (result.balanced){
        console.log("balanced");
      } else{
        console.log("unbalanced");
      }
      return result.balanced;
    }

    // Balanciert den Binary Tree wieder
    rebalance(){
      let inOrder = this.inOrder(); // sortiert nach Reihnfolge
      this.root = this.buildTree(inOrder); // Der Baum auf die neue, balancierte Struktur aktualisiert
    }
}
