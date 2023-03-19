interface Todo {
    text :string
    completed :boolean
}

const visibleTodos = (todos :Todo[], searchValue :string) =>
  todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

export {visibleTodos}
export type {Todo}