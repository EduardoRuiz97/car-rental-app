import Spiner from "@/components/UI/spiner/Spiner";

export default function Loading () {

  const style = {
    width: '100vw', 
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(169, 169, 169)',
    backgroundColor:'white',
    zIndex: '10000',
    gap: '1em',
    padding: '1em',
    textAlign: 'center'
  }

  return (
    <div style={style}>
      <Spiner />
      <h1>Searching for the perfect car for you</h1>
    </div>
  )
}