import { useState } from "react"
import { FormProduct } from "./components/AppProduct/FormProduct/FormProduct"
import { Header } from "./components/AppProduct/Header/Header"
import { ListProduct } from "./components/AppProduct/ListProduct/ListProduct";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}


export const AppProduct = () => {

  const [products, setProducts] = useState<ItemProduct[]>([])
  console.log(products)

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem])
  }

  return (
    <div>
        <Header/>
        <h2 className="text-center">Formulario</h2>
        <FormProduct handleAddProduct={handleAddProduct}/>
        <h2  className="text-center">Productos</h2>
        { products.length > 0 ? <ListProduct arrItems={products} /> 
        : <h3 className="text-center" style={{color:"red"}}>No hay productos</h3> }
    </div>
  )
}
