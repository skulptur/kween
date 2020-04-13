import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { tween } from '../src/index'
import { useEffect, useState } from 'react'

const App = () => {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    return tween({
      duration: 10000,
      onUpdate: setCurrentValue,
    })
  }, [])

  return <div>{currentValue}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
