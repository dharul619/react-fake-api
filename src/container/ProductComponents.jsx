import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ProductComponents() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="w-96 mb-6 ">
        <Link to={`/product/${id}`}>
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-full rounded-lg"
              />
            </CardHeader>
            <CardBody className="h-56">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography className="text-gray-600 mb-2">{category}</Typography>
              <Typography variant="h6" color="blue-gray" className="font-bold">
                $ {price}
              </Typography>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {renderList}
    </div>
  );
}

export default ProductComponents;
