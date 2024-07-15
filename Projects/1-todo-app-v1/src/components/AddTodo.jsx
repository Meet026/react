function AddTodo({label1, label2, button}){
  return (
    <div class="container">
        <div class="row kg-row">
          <div class="col-6">
            {label1}
          </div>
          <div class="col-4">
            {label2}
          </div>
          <div class="col-2">
            {button}
          </div>
        </div>
      </div>
  );
}

export default AddTodo