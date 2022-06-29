export const TestReact = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const containerEl = useRef(null)
  const id = useId()

  // [] 可以让 useEffect 只在挂载和卸载的时候调用
  useEffect(() => {
    console.log(containerEl.current)
    console.log('mounted or updated')
    return () => {
      console.log('unmouted')
    }
  }, [count])
  return <Box ref={containerEl}>
    <span onClick={() => setCount(count + 1)}>{count}</span>
    <span onClick={() => setCount2(count2 + 1)}>{count2}</span>
    <div>
      <label htmlFor={`${id}-firstName`}>First Name</label>
      <div>
        <input id={`${id}-firstName`} type="text" />
      </div>
      <label htmlFor={`${id}-lastName`}>Last Name</label>
      <div>
        <input id={`${id}-lastName`} type="text" />
      </div>
    </div>
  </Box>
}
