
const YutTile = (props: {black: boolean, children: any}) => {
  const fill = props.black ? 'black' : 'red';
  return (
    <div style={{backgroundColor: fill}} className={"w-30 h-30"}>{props.children}</div>
  )
}

export default YutTile;