// .vitepress/plugins/myPlugin.js

export default ({ app }) => {
  // 定义你想要绑定的方法
  const myCustomMethod = () => {
    console.log('This is a custom method bound to ctx.app!');
  };

  // 将方法绑定到 app 实例上
  app.config.globalProperties.$myCustomMethod = myCustomMethod;

  // 如果你想在模板中使用该方法，确保为 Vue 提供一个组件选项
  app.provide('myCustomMethod', myCustomMethod);
};
