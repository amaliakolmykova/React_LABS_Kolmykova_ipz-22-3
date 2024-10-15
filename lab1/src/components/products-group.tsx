import Product from "./product.tsx";
import {products} from "../../constans/products-data.ts";

export default function ProductsGroup(){
    return (
        <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map(product => (
            <Product
                key={product.name}
                name={product.name}
                shortDescription={product.shortDescription}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price} />
            ))}
        </div>
    )
}