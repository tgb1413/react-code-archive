# useRef warning case

```
The ref value 'ref.current' will likely have changed by the time this effect cleanup function runs.
If this ref points to a node rendered by React, copy 'ref.current' to a variable inside the effect, and use that variable in the cleanup function
```

클로저의 특징을 이용한 것으로 보임.
