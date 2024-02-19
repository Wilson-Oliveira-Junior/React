import ListRender from "./components/ListRender"
import CarDetails from "./components/CarDetails"


function App() {

  
  return (
    <div className="App">
      <h1>Avançado em React</h1>    
    <div>
    <img src="./img1.jpg" alt="Paisagem" />
    </div>
    <ListRender/>
    <CarDetails/>
    <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
    <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
    <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
    </div>
  )
}

export default App
