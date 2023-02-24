import { boot } from 'quasar/wrappers'
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

export default boot(({ app }) => {
  app.component('vue-easy-pie-chart', VueEasyPieChart)
})
