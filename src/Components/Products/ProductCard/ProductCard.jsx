
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link key={product?.node?.id} to={`/details/${product?.node?.id}`} className="group">
            <div className="aspect-h-2 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-5 xl:aspect-w-5">
              <img
                src={product?.node?.featuredImage?.url}
                alt={product?.node?.description}
                className="w-full h-full object-cover rounded group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product?.node?.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${product?.node?.variants?.edges[0]?.node?.price?.amount}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductCard