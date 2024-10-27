let todos = [];
let nextId = 1;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const newTodo = {
      id: nextId++,
      title: req.body.title,
      completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
  // ... handle other methods (PUT, DELETE) similarly
}
