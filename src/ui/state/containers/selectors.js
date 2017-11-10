// Selectors are nice-to-haves when your state tree starts getting big.
// They also simplify refactoring the shape of your state tree

// Selectors are pure functions that accept at least one parameter: state. This
// will be the entire current state tree. The selector will then return the selected value.

// What is also nice about Selectors is that they can encapsulate some messy search operations for you
// and are easily memoized for potential performance gains

// So let's create some selectors for containers:

// Step 1: Create a function that accepts the state tree and a container ID, and returns the corresponding container
const getOne = (state, id) => null

// Step 2: Create a function that accepts the state tree and returns the array of containers
const get = (state) => null

// Step 2: Export the function
export {

}
