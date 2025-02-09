
const query = `*[_type == "product"]{
  productImage{
    asset->{
      url
    }
  },
  title,
  price,
  discountpercentage,
  description,
  inventory,
  slug
}`;

export { query };