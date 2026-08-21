function Cart({ cart,setCart }) {

console.log("cart:", cart);
// console.log("is array:", Array.isArray(cart));

const cartTotal=cart.reduce((total,item)=> total + item.price* item.quantity
    ,0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.map((product) => (
        <div key={product.id} className="flex items-center gap-5 p-4 mb-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg"/>
          <h2 className="text-xl font-semibold">
            {product.name} :
          </h2>
          <p>${product.price}</p>
          <button
            onClick={() => {
                const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                    ...item,
                    quantity: Math.max(1, item.quantity - 1)
                    };
                }

                return item;
                });
                setCart(updatedCart);
            }}
            className="px-3 py-1 bg-gray-200 rounded" > - </button>
          <p>Quantity: {product.quantity}</p>
          <button
                onClick={() => {
                    const updatedCart = cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                        ...item,
                        quantity: item.quantity + 1,
                        };
                    }
                    return item;
                    });
                    setCart(updatedCart); }}
                className="px-3 py-1 bg-gray-200 rounded" >  +
                </button>
          <button  onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
            className=" px-3 py-1 bg-red-500 text-white rounded"  >
            Remove
          </button>
        </div>     
      ))} 
      <h2 className="text-xl font-semibold mt-6">
              CartTotal: ${cartTotal}
          </h2>    
    </div>
  );
}
export default Cart;