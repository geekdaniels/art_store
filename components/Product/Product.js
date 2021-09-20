const Product = (props) => {
  const { id, bestseller, image, inCart, category, name, price } =
    props.product;
  return (
    <>
      <div className="col-lg-4 my-3">
        <div className="product">
          <div className="product__image">
            {bestseller && <span className="product__flag">Best Seller</span>}
            <img src={image.src} alt={image.alt} className="img-fluid" />
            <button
              className="btn animated product__buy"
              onClick={() => props.addToCart(id)}
              disabled={inCart ? true : false}
            >
              {inCart ? "ADDED TO CART" : "ADD TO CART"}
            </button>
          </div>

          <p className="product__category">{category}</p>

          <h2 className="product__name">{name}</h2>
          <p className="product__price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
