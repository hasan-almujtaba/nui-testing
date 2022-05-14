import { App } from 'vue'
import NButton from './NButton.vue'

NButton.install = (Vue: App) => {
  Vue.component(NButton.name, NButton)
}

export default NButton