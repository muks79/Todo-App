function App() {
  return (
    <center class="todo-container">
      <h1>TODO App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Ener Tdo here" />
          </div>
          <div class="col-8">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
