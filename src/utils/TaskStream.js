/**
 * @author anchao01
 * @file 事件流的基础类
 * @date Aug 3, 2019 10:06:10 AM
 */
class Task {
  constructor(
    {
      // 触发事件的选择器
      selector,
      // 事件类型
      type,
      // 事件参数, 模拟事件用
      eventParams,
      // 事件构造函数名
      eventConstructorName
    }
  ) {
    this.selector = selector
    this.type = type
    this.eventParams = eventParams
    this.eventConstructorName = eventConstructorName
  }
}

export class TaskStream {
  constructor() {
    this.taskQueue = []
  }

  getEventConstuctorByName(name) {
    const eventContainer = {
      CompositionEvent: CompositionEvent,
      Event: Event,
      FocusEvent: FocusEvent,
      InputEvent: InputEvent,
      KeyboardEvent: KeyboardEvent,
      MutationEvent: MutationEvent,
      ProgressEvent: ProgressEvent,
      UIEvent: UIEvent,
      WheelEvent: WheelEvent
    }

    return eventContainer[name] || Event
  }

  push(task) {
    this.taskQueue.push(new Task(task))
  }

  excute(context) {
    const document = context.document

    this.taskQueue.forEach(task => {
      const event = new this.getEventConstuctorByName(task.eventConstructorName)(task.type, task.eventParams)
      document.querySelector(task.selector).dispatchEvent(event)
    })
  }
}