class Todo{
    key:  number;
    text: string;
    
    constructor(todoText: string) {
        this.text = todoText;
        this.key = Math.random();
    }
    
}

export default Todo;

