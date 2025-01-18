export const allProduct = `
*[_type == "product"] {
  _id,
  name,
  description,
  price,
  "imageUrl": image.asset->url
}
`;









// import { defineQuery } from "next-sanity";

// export const allProduct = defineQuery(`
//     *[_type == "product"]{
//     _id, 
// producName,
// description,
// price,
// category,
// inventory,
// productUrl,
// "image":image.asset->url,
// "product":slug.current,

//     }
//     `)

// export const forPro = defineQuery(`
//         *[_type == "product"][0..3]{
//         _id, 
//     producName,
//     category,
//     price,
//     "Imageurl":image.asset=>url
    
//         }
//         `)