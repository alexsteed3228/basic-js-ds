const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootTree = null;
  }

  root() {
    if (this.rootTree == null){
      return null
    }
    return this.rootTree
  }

  add(data) {
    let current = this;
    
    if (current.rootTree == null){
      current.rootTree = new Node(data);
      return
      }
    
      const nodePlace = function(n){
        if (data < n.data){

          if (n.left != null){
            return nodePlace(n.left)
          } else{
            n.left = new Node(data);
            return
          }
        } else if(data > n.data){

          if (n.right != null){
            return nodePlace(n.right)
          } else {
            n.right = new Node(data);
            return
          }
        } else{
          return
        }
      }
      return nodePlace(current.rootTree)     
      
    
    
  }

  has( data ) {
    let current = this.rootTree;
    while(current != null){
      if (data == current.data){
        return true
      } else if (data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false
  }

  find( data ) {
    let current = this.rootTree;
    
    while(current.data != data){
      if (data < current.data){
        current = current.left
      } else {
        current = current.right;
      } 
      if (current == null){
        return null
      }
      
    }
    return current
  }

  remove( data ) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(n, data){
      if(n == null){
        return null
      }
      if(data < n.data){
        n.left = removeNode(n.left, data);
        return n;
      }else if(data > n.data){
        n.right = removeNode(n.right, data);
        return n;
      }else{
        if(n.left == null && n.right == null){
          return null;
        }
        if(n.left == null){
          n = n.right;
          return n;
        }
        if(n.right == null){
          n = n.left;
          return n;
        }
        let rightMin = n.right;
        while( rightMin.left != null){
          rightMin = rightMin.left;
        }
        n.data = rightMin.data;
        n.right = removeNode(n.right, rightMin.data);
        return n;
      }
    }
    
  }

  min() {
    let current = this.rootTree;
    while(current.left != null){
      current = current.left;
    }
    return current.data
  }

  max() {
    let current = this.rootTree;
    while(current.right != null){
      current = current.right;
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};

