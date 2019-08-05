/**
 * @author anchao01
 * @file 事件流的基础类
 * @date Aug 3, 2019 10:06:10 AM
 */
const puppeteer = window.require('puppeteer')
class Task {
  constructor(
    {
      // 触发事件的选择器
      selector,
      // 事件类型
      type,
      value
    }
  ) {
    this.selector = selector
    this.type = type
    this.value = value
  }
}

export class TaskStream {
  constructor({
    url,
    taskQueue = [],
    name
  } = {}) {
    this.taskQueue = taskQueue
    this.name = name
    this.url = url
  }

  push(task) {
    this.taskQueue.push(new Task(task))
  }

  async excute() {
    const browser = await puppeteer.launch({headless: false}); // default is true
    const page = await browser.newPage();
    await page.goto(this.url);
    for (let i = 0; i < this.taskQueue.length; i++) {
      const {type, selector, value} = this.taskQueue[i]
      await page.waitForSelector(selector)
      switch (type) {
        case 'click': {
          await page.click(selector)
          break
        }
        case 'change': {
          await page.type(selector, value, {delay: -1000})
        }
      }
    }
  }
}