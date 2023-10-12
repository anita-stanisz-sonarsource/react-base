export function useBlah() {
  return {
    data: [] as string[],
    error: undefined
  }
}

export function Comp() {
  const {
    data,
    error
  } = useBlah();
  return <div>
        {data.map(d => <div>{d}</div>)}
        {error && <div>{error}</div>}
    </div>;
}
