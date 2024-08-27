import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Stranger Things', 'Mr Robot' ])


    // para insertar un nuevo elemento en el array se hace con el setCategories, con el operador
    // spread ... se hace una copia del array original y se agrega el nuevo elemento
    const onAddCategory = () => {

      // setCategories( [ ...categories, ' Hello World' ] )
      setCategories( [ categories ])

    }

  return (
    <>

      <h1>GifExpertApp</h1>

        <AddCategory setCategories={ setCategories }/>

        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            }) }
            
        </ol>
        
    </>
  )
}




