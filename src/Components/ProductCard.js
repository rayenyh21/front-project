import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductPanier } from '../redux/slices/PannierSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = (product) => {
  const dispatch=useDispatch()
  return (
    <>
  
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.poster} alt ='Image product not found'/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Button>{product.price}</Button>
          <Button onClick={()=> {dispatch(addProductPanier(product))}}>Add to card </Button>
        </Card.Body>
    </Card>

    </>
  )
}

export default ProductCard

