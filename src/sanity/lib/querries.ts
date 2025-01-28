import { groq } from "next-sanity";


// Query for all products
export const allProduct = groq`*[_type == "product"]{
  _id,
  productName,
  slug {
    current
  },
  description,
  price,
  image
}`;


// Query for featured products (first 4 products)
export const forPro = groq` *[_type == "product"][0..2]`;
