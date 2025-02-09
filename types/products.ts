export interface Product {
    _id: string;
    productName: string;
    _type:"product";
    image: {
        assest:{
            _ref:string;
            _type:"image";

        }
    }
price: number;
discountPercentage: number;
description?: string;
    slug: {
        current: string;
    };
    inventory: number;
}
