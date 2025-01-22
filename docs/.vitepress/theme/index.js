import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import '../../../src/styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Button from '../../../src/components/Button.vue'
import DemoInput from '../../../src/components/DemoInput.vue'
import Checkbox from '../../../src/components/checkbox.vue'
import DemoButton from '../../../src/components/DemoButton.vue'
import { sendPostRequest } from './compoentsInterface.js'

// 图标并进行全局注册
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)

    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      // 语言设置
    })
    ctx.app.config.globalProperties.sendPostRequest = sendPostRequest
    ctx.app.component(Button.name, Button)
    ctx.app.component(DemoInput.name, DemoInput)
    ctx.app.component('XlCheckbox', Checkbox)
    ctx.app.component('XlDemoButton', DemoButton)
  }
}
