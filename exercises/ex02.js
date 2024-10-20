// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  const tempStack = new Stack()
  let item1 = false
  let item2 = false


  while(!fruits.isEmpty()){
    let curr = fruits.pop()

    if(curr === a){
      item1 = true
      tempStack.push(curr)
      break
    } else if (curr === b){
      item2 = true
      tempStack.push(curr)
      break
    }
    tempStack.push(curr)
  }

  while(!fruits.isEmpty()){
    let curr = fruits.pop()
    if((curr === a && item2) || (curr === b && item1)){
      tempStack.push(curr)
      break
    }
  }
  while(!tempStack.isEmpty()){
    fruits.push(tempStack.pop())
  }

}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");

console.log(fruits.printStack())// Apple Banana Elderberry