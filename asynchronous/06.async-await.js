movePlayers(100, 'left')
  .then(() => movePlayers(400, 'Left'))
  .then(() => movePlayers(10, 'Right'))
  .then(() => movePlayers(500, 'Left'))


async function playerStart() {
  const first = await movePlayers(100, 'Left')
  const second = await movePlayers(400, 'Left')
  await movePlayers(10, 'Right')
  await movePlayers(500, 'Left')
}