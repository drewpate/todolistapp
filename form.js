function TodoForm({addTodo}){

    

    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
        labelRemover();
        }

    return(
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add a task ..."
        onChange={e => setValue(e.target.value)}
        />
        <label 
        id="how-to-remove" 
        htmlFor="howToRemove"
        >Simply click each task to remove it.</label>
      </form>

    ) ;
}

var labelRemover = (function() {
    
    var executed = false;
    return function() {
    let label = document.getElementById("how-to-remove");    
    if (!executed) {
    executed = true;
    label.remove();
        }
    };
})();