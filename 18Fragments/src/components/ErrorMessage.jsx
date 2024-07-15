function ErrorMessage({items}){
  return(
    <>
      {/* {foodItem.length === 0 ? <h3>No healthy Food Found.</h3> : null} */}
      
      {items.length === 0 && <h3>No healthy Food Found</h3>}
    </>
  )
}

export default ErrorMessage