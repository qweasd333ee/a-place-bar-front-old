import { boot } from 'quasar/wrappers'
import VTailwindPieChart from 'vue3-tailwind-pie-chart'

export default boot(({ app }) => {
  app.component('vue3-tailwind-pie-chart', VTailwindPieChart)
})
