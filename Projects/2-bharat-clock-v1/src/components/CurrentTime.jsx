function CurrentTime(){
  return(
    <p className="lead">This is the current Time : {new Date().toLocaleDateString} </p>
  )
}

export default CurrentTime