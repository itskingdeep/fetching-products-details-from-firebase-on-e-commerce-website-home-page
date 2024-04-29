import "./index.css";

const productDetail1 = {
  _id: "652a9af7cb227bc3cf197642",
  title: "Galaxy Z Flip4",
  price: 55000,
  brand: "Samsung",
  thumbnail:
    "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip4-5g.jpg",
};

function Product({ productDetail = productDetail1 }) {
  return (
    <div className="product">
      <img alt={productDetail.title} src={productDetail.thumbnail} />
      <h4>{productDetail.title}</h4>
      <h5>{productDetail.brand}</h5>
      <p>{productDetail.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
