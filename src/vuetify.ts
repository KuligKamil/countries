import { type ThemeDefinition, createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#EFFAFA',
    primary: '#5BA4A4',
    secondary: '#2C3A3A',
  },
}

export const vuetify = createVuetify({
  theme: {
    themes: {
      darkTheme,
    },
  },
})
