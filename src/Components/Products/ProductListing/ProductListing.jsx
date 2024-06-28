import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../../Hooks/useFetch/useFetch";
import ProductListingSkeleton from "../../Common/Skeleton/ProductListingSkeleton";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const { data, isloading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(
      "https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D"
    );
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data?.data?.products?.edges);
    } else if (error) console.log(error);
  }, [data, error]);

  return (
    <>
      {isloading ? (
        <><ProductListingSkeleton number={8}/></>
      ) : (
        <>
          <ProductCard products={products} />
        </>
      )}
    </>
  );
};

export default ProductListing;
