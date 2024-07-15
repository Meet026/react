function Random(){
    let number = parseInt(Math.random() * 10);

    return(
      <h1 style={{'backgroundColor': '#552992'}}>Random number is : {number}</h1>
    )
  
}

export default Random