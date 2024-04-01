import { Card } from "./components/Card"
import { Navbar } from "./components/Navbar"
import './Index.css'
import { personajes }from'./utils/Personajes'
export const Principal = ()=>{
    return(
        <main>
            <Navbar/>
            <h1>Mi Primer Aplicativo Certus</h1>
            {
            personajes.map((personajes)=>(
                <Card 
                key={personajes.nombre}
                {...personajes}  
                />
                ))
            }
            </main>
    )
}