import './styles.css';
import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';


const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea);

console.log(tarea);
console.log(todoList);

crearTodoHtml(tarea);

