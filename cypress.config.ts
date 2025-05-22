import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'r6efb4', // 
  e2e: {
    baseUrl: 'https://r0996202-realbeans.myshopify.com',
    setupNodeEvents(on, config) {
      // Event listeners indien nodig
    },
  },
})
