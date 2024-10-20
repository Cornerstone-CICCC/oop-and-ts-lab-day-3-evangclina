// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  let tempQueue = new Queue()
  let array2 = []
  let isPalindrome = false
  while(!queue.isEmpty()){
    let curr = queue.dequeue()
    array2.push(curr)
  }
  if(queue === array2){
    isPalindrome = true
  }
  return isPalindrome
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true