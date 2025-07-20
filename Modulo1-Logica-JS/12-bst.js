// Árvore Binária de Busca (BST, Binary Search Tree)

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }

    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left == null) {
                currentNode.left = newNode
            } else {
                this.insertNode(currentNode.left, newNode)
            }
        } else {
            if (currentNode.right == null) {
                currentNode.right = newNode
            } else {
                this.insertNode(currentNode.right, newNode)
            }
        }
    }

    inoderTraversal(node = this.root) {
        if (node != null) {
            this.inoderTraversal(node.left)
            console.log(node.value)
            this.inoderTraversal(node.right)
        }
    }

    search(value, node = this.root) {
        if (node === null) return false

        if (node === node.value) return false

        if (value < node.value) {
            return this.search(value, node.left)
        } else {
            return this.search(value, node.right)
        }
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(11)
tree.insert(3)
tree.insert(6)
tree.insert(10)
tree.insert(9)
tree.insert(8)
tree.insert(15)

tree.inoderTraversal()