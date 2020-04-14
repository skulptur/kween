import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { EasingGraphList } from './components/EasingGraphList'
import * as easingFunctions from './easingFunctions'
import { typedObjectEntries } from './utils/typedObjectUtils'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme'

const easeList = typedObjectEntries(easingFunctions).map(([label, ease]) => {
  return {
    label,
    ease,
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EasingGraphList easeList={easeList} />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
