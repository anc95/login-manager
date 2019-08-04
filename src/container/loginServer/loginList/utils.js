export function taskInfoToTaskLineAdaptor(taskInfo) {
  const tasks = [
    {
      name: `打开 ${taskInfo.url}`
    }
  ]

  taskInfo.taskQueue.forEach(task => {
    tasks.push({
      name: `${task.selector} 触发 ${task.type}`
    })
  })

  return tasks
}