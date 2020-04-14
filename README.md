<p align="center">
  <img alt="kween-logo" src="https://github.com/skulptur/kween/blob/master/kween-logo.png?raw=true" width="350">
</p>

## Get started

Install

```bash
npm install --save kween
# or
yarn add kween
```

Use

```typescript
import { tween, bounceInOut } from 'kween'

tween({
  duration: 1000, // in milliseconds
  ease: bounceInOut,
  onUpdate: (value, progress) => {
    // value is eased, progress is linear
    console.log(value, progress)
  },
})
```
