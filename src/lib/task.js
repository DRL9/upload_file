class Task {
    constructor(file, element) {
        this.id = Date.now();
        this.file = file;
        this.element = element;
    }
    /**
     *
     * @param {File} file
     * @param {HTMLElement} element
     */
    static getTask(file, element) {
        return new Task(file, element);
    }
}

/**
 * 向taskList添加任务
 * @param {Array} taskList
 * @param {File} file
 * @return {Task}
 */
export function addTask(taskList, file, li) {
    var task = Task.getTask(file, li);
    taskList.push(task);
    return task;
}

/**
 * 向taskList移除任务
 * @param {Array} taskList
 * @param {Task} task
 */
export function removeTask(taskList, task) {
    var index = taskList.findIndex(function (t) {
        return t.id == task.id;
    });
    taskList.splice(index, 1);
}

/**
 * 检查该文件名是否存在在任务列表中
 * @param {Array} taskList
 * @param {String} fileName
 * @return {Boolean}
 */
export function isFileRepeat(taskList, fileName) {
    var index = taskList.findIndex(function (task) {
        return task.file.name == fileName;
    });
    return index >= 0;
}