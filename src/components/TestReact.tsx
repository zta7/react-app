export const TestReact = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  // setInterval(() => {
  //   setCount(count + 1)
  //   // console.log(count)
  // }, 5000);

  // [] 可以让 useEffect 只在挂载和卸载的时候调用
  useEffect(() => {
    console.log('mounted or updated')
    return () => {
      console.log('unmouted')
    }
  }, [count])
  return <div>
    <span onClick={ () => setCount(count + 1) }>{count}</span>
    <span onClick={ () => setCount2(count2 + 1) }>{count2}</span>
  </div>
}