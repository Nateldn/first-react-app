const App = () => {
  return (
  <div>
    <h1>React App</h1>
    <h2>Welcome</h2>
    <Movies favMovie="The Fellowship of The Ring" released="2001" genre="fantasy"/>
    <Movies favMovie="Two Towers" released="2002" genre="fantasy"/>
    <Movies favMovie="blade runner" released="1982" genre="sci-fi"/>
  </div>
  )
}

const Movies = (props) => {
  return (
    <div>
      <h3>A movie I like is {props.favMovie}.</h3>
      <h4>Released in {props.released}</h4>
      <Genre genre={props.genre}/>
    </div>
  )   
}

const Genre = (props) => {
  return <p>Genre: {props.genre}</p>
}

