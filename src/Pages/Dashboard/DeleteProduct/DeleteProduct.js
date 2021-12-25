import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <Button onClick={() => handleDelete(product._id)}>
            DeleteProduct
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DeleteProduct;
