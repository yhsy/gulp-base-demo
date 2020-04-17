// js压缩 混淆
function js () {
  console.log('this is js scripts task')
}

// scss/less 编译、压缩、输出css文件
function css () {
  console.log('this is css styles task')
}

// 监听这些文件的变化
function watcher () {

}

// 删除dist目录
function clean () {

}

// gulp Task 多任务
// js任务
exports.scripts = js;
// css任务
exports.styles = css;

// 创建 gulp task
exports.default = function () {
  console.log('hello gulp')
}

// 查看任务列表 npx gulp --tasks 或 yarn tasks
// 运行任务 npx gulp scripts