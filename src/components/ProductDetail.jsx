import { useParams } from "react-router-dom";
import products from "../data/product";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <p className="text-center text-2xl font-semibold mt-6">
        Product not found
      </p>
    );
  }

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  return (
    <div className="flex items-center justify-center mt-8 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-cover rounded-lg p-5 border"
      />
      <div className="items-center p-5">
        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>
        <p className="text-xl mt-2">
          ${product.price}
        </p>
        
        <p className="text-md mt-2">
          {product.description}
        </p>
        <button
          onClick={() => {
            if (existingProduct) {
              const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              });
              setCart(updatedCart);
            } else {
              setCart([ ...cart,  {...product, quantity: 1,},
              ]);
            }
          }}
          className="mt-6 rounded-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-700" >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;