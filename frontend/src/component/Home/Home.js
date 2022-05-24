import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["FIND", "AMAZING", "PRODUCTS", "BELOW"];

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p className="animate-charcter">Welcome to Store</p>

            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.molasses}
              style={{
                margin: "5vmax",
                // font: " 600 3vmax ",
                fontSize: "4vmax",
                fontFamily: "Lucida Sans",
                color: "#194D33",
                fontWeight: 800,
              }}
            />
            {/* <h1>FIND AMAZING PRODUCTS BELOW</h1> */}

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
