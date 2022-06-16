import { useState, useEffect } from 'react'

// 在修改数据之后，把count值放到页面标题中
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调 并且定义副作用
// 3. 当我们修改状态更新组件时，副作用也会不断执行

// 依赖项控制副作用的执行时机
// 1. 默认状态(无依赖项)
//    组件初始化的时候先执行一次，等到每次数据修改组件更新再次执行
// 2. 添加空数组依赖项 只在组件初始化的时候执行一次
// 3. 添加特定依赖项 组件初始化的时候执行一次 依赖项发生变化的时候再次执行
// 4. 注意事项  只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否在可能会有bug
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('hsy')
  useEffect(() => {
    // 定义副作用
    console.log('副作用又执行了 ');
    document.title = count
  }, [count])
  return(
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <button onClick={() => setName('yt')}>{name}</button>
    </div>
  )
}

export default App