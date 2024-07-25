# Binary_Search_Trees-TOP

Solution for TheOdinProject: Binary Search Trees: https://www.theodinproject.com/lessons/javascript-binary-search-trees

---

## class Tree

 Methoden:

---

#### **`constructor(arr)`**

**constructor(arr: Array<number>): void**

Initialisiert einen neuen Baum basierend auf dem angegebenen Array. Das Array wird zuerst von Duplikaten gefiltert und aufsteigend sortiert, bevor der Baum aufgebaut wird.

- **Parameter:**
  - `arr`: Ein Array von Zahlen, das als Grundlage für den Baum dient.

---

#### **`buildTree(arr)`**

**buildTree(arr: Array<number>): Node | null**

Konstruiert einen Baum aus einem sortierten Array. Der mittlere Wert des Arrays wird als Wurzel verwendet, und die rekursive Konstruktion erfolgt für die linke und rechte Teilmengen des Arrays.

- **Parameter:**
  - `arr`: Ein Array von Zahlen, das den Baum aufbaut.
  
- **Rückgabe:**
  - Die Wurzel des aufgebauten Baums oder `null`, wenn das Array leer ist.

---

#### **`printTree()`**

**printTree(): void**

Gibt eine grafische Darstellung des Baums in der Konsole aus.

---

#### **`insert(value)`**

**insert(value: number): void**

Fügt einen neuen Wert in den Baum ein. Der Wert wird entsprechend der BST-Eigenschaften an der richtigen Stelle eingefügt.

- **Parameter:**
  - `value`: Der einzufügende Wert.

---

#### **`findMin(node)`**

**findMin(node: Node): Node**

Findet den Knoten mit dem kleinsten Wert im Subbaum, der von `node` ausgehend ist.

- **Parameter:**
  - `node`: Der Startknoten für die Suche nach dem kleinsten Knoten.

- **Rückgabe:**
  - Der Knoten mit dem kleinsten Wert im Subbaum.

---

#### **`deleteNode(root, value)`**

**deleteNode(root: Node, value: number): Node**

Löscht den Knoten mit dem angegebenen Wert aus dem Baum, beginnend bei der Wurzel. Der Baum wird nach dem Löschen angepasst, um die BST-Eigenschaften zu erhalten.

- **Parameter:**
  - `root`: Die Wurzel des Teilbaums, aus dem der Knoten gelöscht werden soll.
  - `value`: Der Wert des zu löschenden Knotens.

- **Rückgabe:**
  - Der (möglicherweise aktualisierte) Wurzelknoten des Teilbaums.

---

#### **`deleteItem(value)`**

**deleteItem(value: number): void**

Löscht den Knoten mit dem angegebenen Wert aus dem Baum, beginnend bei der Wurzel des gesamten Baums.

- **Parameter:**
  - `value`: Der Wert des zu löschenden Knotens.

---

#### **`find(value)`**

**find(value: number): Node | null**

Findet den Knoten mit dem angegebenen Wert im Baum.

- **Parameter:**
  - `value`: Der Wert des gesuchten Knotens.

- **Rückgabe:**
  - Der Knoten mit dem angegebenen Wert oder `null`, wenn der Knoten nicht gefunden wird.

---

#### **`levelOrder(callback)`**

**levelOrder(callback?: (node: Node) => void): Array<number> | void**

Durchläuft den Baum in Breitensuche (Level-Order) und wendet die angegebene Callback-Funktion auf jeden Knoten an. Wenn kein Callback angegeben wird, wird ein Array der Knotendaten zurückgegeben.

- **Parameter:**
  - `callback`: Eine optionale Funktion, die auf jeden Knoten angewendet wird.

- **Rückgabe:**
  - Ein Array der Knotendaten oder `void`, wenn ein Callback angegeben ist.

---

#### **`inOrder(callback)`**

**inOrder(callback?: (node: Node) => void): Array<number> | void**

Durchläuft den Baum in InOrder-Traversierung und wendet die angegebene Callback-Funktion auf jeden Knoten an. Wenn kein Callback angegeben wird, wird ein Array der Knotendaten zurückgegeben.

- **Parameter:**
  - `callback`: Eine optionale Funktion, die auf jeden Knoten angewendet wird.

- **Rückgabe:**
  - Ein Array der Knotendaten oder `void`, wenn ein Callback angegeben ist.

---

#### **`preOrder(callback)`**

**preOrder(callback?: (node: Node) => void): Array<number> | void**

Durchläuft den Baum in PreOrder-Traversierung und wendet die angegebene Callback-Funktion auf jeden Knoten an. Wenn kein Callback angegeben wird, wird ein Array der Knotendaten zurückgegeben.

- **Parameter:**
  - `callback`: Eine optionale Funktion, die auf jeden Knoten angewendet wird.

- **Rückgabe:**
  - Ein Array der Knotendaten oder `void`, wenn ein Callback angegeben ist.

---

#### **`postOrder(callback)`**

**postOrder(callback?: (node: Node) => void): Array<number> | void**

Durchläuft den Baum in PostOrder-Traversierung und wendet die angegebene Callback-Funktion auf jeden Knoten an. Wenn kein Callback angegeben wird, wird ein Array der Knotendaten zurückgegeben.

- **Parameter:**
  - `callback`: Eine optionale Funktion, die auf jeden Knoten angewendet wird.

- **Rückgabe:**
  - Ein Array der Knotendaten oder `void`, wenn ein Callback angegeben ist.

---

#### **`height(node)`**

**height(node: Node | null): number**

Berechnet die Höhe des angegebenen Knotens. Die Höhe ist definiert als die Länge des längsten Pfades von diesem Knoten zu einem Blattknoten.

- **Parameter:**
  - `node`: Der Knoten, dessen Höhe berechnet werden soll.

- **Rückgabe:**
  - Die Höhe des Knotens.

---

#### **`depth(node)`**

**depth(node: Node | null): number**

Berechnet die Tiefe des angegebenen Knotens. Die Tiefe ist die Anzahl der Kanten auf dem längsten Pfad von der Wurzel des Baums zu diesem Knoten.

- **Parameter:**
  - `node`: Der Knoten, dessen Tiefe berechnet werden soll.

- **Rückgabe:**
  - Die Tiefe des Knotens.

---

#### **`isBalanced()`**

**isBalanced(): boolean**

Überprüft, ob der Baum balanciert ist. Ein Baum ist balanciert, wenn die Höhenunterschiede der linken und rechten Teilbäume aller Knoten maximal 1 betragen.

- **Rückgabe:**
  - `true`, wenn der Baum balanciert ist, andernfalls `false`.

---

#### **`rebalance()`**

**rebalance(): void**

Balanciert den Baum neu, indem er alle Knoten in aufsteigender Reihenfolge in ein Array einliest und dann einen neuen, balancierten Baum aufbaut.

---


Hier ist die Methodendokumentation für die `Node`-Klasse:

---

## class Node

### Methoden:

---

#### **`constructor(input)`**

**constructor(input: any): void**

Initialisiert einen neuen Knoten mit dem angegebenen Wert. Der Knoten hat initial keine linken oder rechten Kindknoten.

- **Parameter:**
  - `input`: Der Wert, der in diesem Knoten gespeichert wird.

---

#### **`data`**

**data: any**

Das Datenfeld des Knotens, das den Wert speichert, der mit diesem Knoten verknüpft ist.

- **Typ:**
  - `any`

---

#### **`left`**

**left: Node | null**

Der linke Kindknoten dieses Knotens. Initial auf `null` gesetzt, was bedeutet, dass der Knoten anfänglich keinen linken Kindknoten hat.

- **Typ:**
  - `Node | null`

---

#### **`right`**

**right: Node | null**

Der rechte Kindknoten dieses Knotens. Initial auf `null` gesetzt, was bedeutet, dass der Knoten anfänglich keinen rechten Kindknoten hat.

- **Typ:**
  - `Node | null`

---

