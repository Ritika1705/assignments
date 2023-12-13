/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.todo = [];  
  }

  add(task)
  {
    this.todo.push(task);
  }

  remove(idx)
  {
    this.todo.splice(idx, 1);
  }

  update(idx , task)
  {
    var len = this.todo.length;
    if(idx >= len)
    {
      return;
    }
    this.todo[idx] = task;
  }

  getAll()
  {
    return this.todo;
  }

  get(idx)
  {
    var len = this.todo.length;
    if(idx >= len)
    {
      return null;
    }
    return this.todo.at(idx);
  }

  clear()
  {
    this.todo = [];
  }

}

module.exports = Todo;
