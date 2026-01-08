// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function getHeight
    this.getHeight = function(root) {

        // Add your code here
        const getHeight = (stack, highest) => {
            const el = stack.shift();
            if(!el) {return highest;}

            if(el.link.left) {
                stack.push({link: el.link.left, depth: el.depth + 1});
            }
            if(el.link.right) {
                stack.push({link: el.link.right, depth: el.depth + 1});
            }
            return getHeight(stack, Math.max(highest, el.depth));

        }

        return getHeight([{link: root, depth: 0}], 0);
    }; // End of function getHeight
} // End of function BinarySearchTree

function main () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = [9,
        20,
        50,
        35,
        44,
        9,
        15,
        62,
        11,
        13,]

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    console.log(tree.getHeight(root));
}
main();
