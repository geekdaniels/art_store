import Image from "next/image";

const Featured = (props) => {
  const { id, image, inCart, category, details, name } = props.data;
  return (
    <>
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>{name}</h2>
          </div>

          <div className="col-lg-3 offset-lg-3">
            <button
              className="btn btn--primary"
              onClick={() => props.addToCart(id)}
              disabled={inCart ? true : false}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-12 mb-4">
            <div className="featured">
              <div className="featured__image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={1600}
                  height={600}
                  className="featured__image img-fluid"
                />
                <div className="featured__flag">Photo of the day</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <h2 className="featured__title">About the {name}</h2>
            <p className="featured__category">{category}</p>
            <p className="featured__description">{details.description}</p>
          </div>

          <div className="col-lg-4 offset-lg-1">
            <h2 className="featured__title featured__title--right mb-3">
              People also buy
            </h2>

            <div className="related d-flex no-gutters">
              <div className="col">
                <img
                  src="https://source.unsplash.com/3MAmj1ZKSZA/600x600"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col">
                <img
                  src="https://source.unsplash.com/3MAmj1ZKSZA/600x600"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col">
                <img
                  src="https://source.unsplash.com/3MAmj1ZKSZA/600x600"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <h5 className="text-right my-3">Details</h5>
            <p className="text-secondary text-right mb-2 font-weight-light">
              Size: {details.dimensions.width} x {details.dimensions.height}{" "}
              pixel
            </p>
            <p className="text-secondary text-right font-weight-light">
              Size: 15 mb
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
