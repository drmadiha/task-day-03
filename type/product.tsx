export interface Products{
    _id:string;
    productName:string;
    _type:"product";
    image?:{
        assest:{
            _ref:string;
            _type: "image";
        }
    };
    price:number;
    description:string;
    slug:{
        _type: "slug"
        current:string;
    };
    inventory:number;
}