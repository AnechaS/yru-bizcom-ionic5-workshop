export const items = Array.from({ length: 6 }, (_, i) => ({
  item_id: i + 1,
  title: 'some title ' + (i + 1),
  completed: Math.floor(Math.random() * 2),
}))
