// 1-

function arraysContainSameElements(arr1: any[], arr2: any[]): boolean {
  // Convert arrays to sets
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Check if both sets have the same size
  if (set1.size !== set2.size) {
    return false;
  }

  // Check if every element in set1 is present in set2
  for (const item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }

  return true;
}

// Example usage
const arr1 = ['apple', '', 'banana', 'orange', '', 'apple', '', 'banana', 'orange'];
const arr2 = ['banana', 'orange', 'apple', '', '', '', 'banana', 'orange', 'apple'];

console.log(arraysContainSameElements(arr1, arr2));

// 2-

function filterStrings(arr: any[]): string[] {
    return arr.filter((item): item is string => typeof item === 'string');
  }

// Example usage
const mixedArray = [1, 'apple', true, 'banana', 42, 'orange'];
const stringArray = filterStrings(mixedArray);
  
console.log(stringArray);

// 3- Differences between 'let' and 'var' in TypeScript
//Even though in TypeScript (and JavaScript), 'let' and 'var' are both used for variable declarations, they have key differences:
// ---- Scope:
//var: Variables declared with var are function-scoped or globally-scoped. This means they are accessible within the function they are declared in or globally if declared outside any function.
//let: Variables declared with let are block-scoped. They are only accessible within the block (e.g., within curly braces {}) in which they are declared.
// ---- Hoisting:
//var: Variables declared with var are hoisted to the top of their scope, meaning they are initialized with undefined before any code is executed.
//let: Variables declared with let are also hoisted but are not initialized. Accessing them before the declaration results in a ReferenceError.
// ---- Re-declaration:
//var: Allows re-declaration of the same variable within the same scope.
//let: Does not allow re-declaration of the same variable within the same scope.

// 4- Handling Asynchronous Programming in TypeScript
//In TypeScript, you can handle asynchronous programming using Promise, async/await, and callbacks.
//Using Promises:
function asyncPromiseOperation(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Using Promise: Operation completed');
      }, 1000);
    });
  }
  
  asyncPromiseOperation().then(result => {
    console.log(result);
  });
//Using async/await:
async function performAsyncOperation(): Promise<void> {
    const asyncStr = "Using async/await: ";
    const result = await asyncPromiseOperation();
    console.log(asyncStr.concat(result));
}
  
performAsyncOperation();
//Using Callbacks:
function asyncCallbackOperation(callback: (result: string) => void): void {
    setTimeout(() => {
      callback('Using Callback: Operation completed');
    }, 1000);
}
  
asyncCallbackOperation(result => {
    console.log(result);
});