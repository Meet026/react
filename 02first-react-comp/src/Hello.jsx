function Hello(){
  let username = 'Meet'
  let fullName = () => {
    return username
  }
  return(
    <h1>Hello {fullName()}</h1>
  )
}

export default Hello