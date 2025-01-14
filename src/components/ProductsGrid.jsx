import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils/index";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => {
        const { title, price, image } = item.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300 animate-fadeIn "
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-primary">{dollarAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
