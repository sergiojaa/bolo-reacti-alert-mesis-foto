
import Card from "./card"
import MessiImage from '../images/messi.jpg'
import IniestaImage from '../images/iniesta.webp'
import NeymarImage from '../images/neymar.webp'
import GauchoImage from '../images/gaucho.jpg'

const data = [
    { id:1,name: "messi", image: MessiImage},
    {id:2,name: "iniesta", image: IniestaImage},
    {id:3,name: "neymar", image: NeymarImage},
    {id:4,name: "gaucho", image: GauchoImage}
]
const cardlist = () => {
    function action(name){
        alert(`this is an action from ${name} `)
    }
  return (
    <div className="card-list">
       {data.map((card) => <Card key={card.id} name={card.name} image = {card.image} action = {action}/>)}
    </div>
  )
}

export default cardlist
