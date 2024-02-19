import ListRender from "./components/ListRender"
import CarDetails from "./components/CarDetails"


function App() {

  const cars =[
    {id: 1, brand: "Ferrari", color :"Amarela", newCar:true, km: 0},
    {id: 2, brand: "KIA", color :"Branca", newCar:false, km: 234},
    {id: 3, brand: "Renault", color :"Azul", newCar:false, km: 334554},
  ];


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
    {cars.map((car) => (
      <CarDetails
      brand={car.brand}
      color={car.color}
      km={car.km}
      newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App
