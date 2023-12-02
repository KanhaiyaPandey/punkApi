
import { useLoaderData } from "react-router-dom"
import { filterData } from "../utils/helper";
import { useHomeContext } from "../pages/Home";


const Products = () => {

    const {searchText} = useHomeContext()

    const {products} = useLoaderData();
    const data = filterData(searchText,products);


   return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
    {data.map((product) => {
      const { name, image_url, tagline } = product;
    
      return (
        <div
          key={product.id}
          to={`/products/${product.id}`}
          className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
        >
          <figure className='px-4 pt-4'>
            <img
              src={image_url}
              alt={name}
              className='rounded-xl h-64 md:h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title capitalize tracking-wider'>{name}</h2>
            <span>{tagline}</span>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Products