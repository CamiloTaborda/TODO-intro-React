import "./CreateTodoButton.css"

function CreateTodoButton ({ setOpenModal }) {
    return (
      <button className="button"
      onClick={
        () => {
          setOpenModal (state => !state)
        }
      }
      >+</button>
    );
}

export { CreateTodoButton };