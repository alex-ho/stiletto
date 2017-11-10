import React from 'react'
import { connect } from 'react-redux'
import ContainerTile from 'ui/components/ContainerTile'

// Here we will create our first connected redux container
// Step 1: Create a normal pure React component like always
const ContainerList = () => (
  <div>
    <ContainerTile />
  </div>
)

// Step 2 (optional): Create a function called mapDispatchToProps
const mapStateToProps = (state) => {}

// Step 3 (optional): Create a function called mapStateToProps
const mapDispatchToProps = (dispatch) => {}

// Step 4: Export the result of calling the react-redux/connect function on
// your normal React component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerList)
