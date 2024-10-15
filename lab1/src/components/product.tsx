import {ProductType} from "../../constans/products-data.ts";
import ProductImage from "./product-card/product-image.tsx";
import ProductDescription from "./product-card/product-description.tsx";

export default function Product({name, shortDescription, description, imageUrl, price}:ProductType){

    return (
        <div className='w-96 min-h-[500px] h-auto bg-black rounded-3xl'>
            <ProductImage imageUrl={imageUrl} name={name} />
           <ProductDescription name={name} shortDescription={shortDescription} description={description} price={price}/>
        </div>
    )
}