// Reducers are pure functions that accept current state
// and an Action.

// Reducers are composed so that they always operate on their slice of the state tree.
// i.e. if the state tree is { containers: [], counter: 5 }, then the reducer defined in
// state/containers will receive [] in the 'state' param

// TODO: Discuss whether we want individual action reducers to live in the action or have
// all within the reducer for that state slice

// So let's create our reducer
// Step 1: Import the action type we created in state/containers/actions.js
import { foo } from 'state/containers/actions'

// Step 2: Create a function that accepts: (state, action) and performs the correct operation
const reducer = (state, action) => state

// Step 3: Export the reducer
export default null
