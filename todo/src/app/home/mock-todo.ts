export const todos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: 'some title ' + (i + 1),
  completed: Boolean(Math.floor(Math.random() * 2)),
}))
