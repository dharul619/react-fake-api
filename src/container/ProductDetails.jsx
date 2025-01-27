import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../redux/actions/productsActions";
import { Button } from "@material-tailwind/react";

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="container mx-auto p-6">
      {Object.keys(product).length === 0 ? (
        <div className="text-center text-xl font-semibold">Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              className="w-full h-fit object-cover rounded-lg shadow"
              src={image}
              alt={title}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <h2 className="text-2xl text-teal-500 font-semibold mb-4">
              ${price}
            </h2>
            <h3 className="text-lg font-medium text-gray-600 mb-4">
              {category}
            </h3>
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="flex flex-col justify-end gap-10 mt-11">
              <Button className="cursor-not-allowed" color="teal">
                Add to Cart
              </Button>
              <Button
                className="cursor-pointer"
                color="red"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
