import ProductCard from './ProductCard'
import img1 from '../../assets/product1.png'
import img2 from '../../assets/product2.png'
import img3 from '../../assets/product3.png'
import img4 from '../../assets/product4.png'
import img5 from '../../assets/product5.png'

const PRODUCTS_LIST = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is first product description',
    backgroundImg: img1,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is second product description',
    backgroundImg: img2,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is third product description',
    backgroundImg: img3,
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'This is another new product description',
    backgroundImg: img4,
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'This is product description',
    backgroundImg: img5,
  },
]

const ProductsList = () => {
  const products = PRODUCTS_LIST.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      backgroundImg={product.backgroundImg}
    />
  ))

  return products
}

export default ProductsList
