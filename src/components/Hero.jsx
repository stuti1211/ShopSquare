import { Truck ,ShieldCheck , RotateCcw} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/product";

function Hero({search,category ,cart,setCart}){
    
  const filteredProducts = products.filter((product) =>{
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =category==="All"|| product.category === category;

   return matchesSearch && matchesCategory;
});

const navigate = useNavigate();

return(
<>
 <section className=" flex items-center justify-between w-full h-[400px] bg-blue-300 px-20">
 <div className="flex flex-col items-center">
  <h1 className="font-bold text-4xl text-center pt-20 text-gray-700 ">Shop the Latest Product</h1>
  <p className="text-center text-lg mt-4 ">Discover the latest products at the best prices.</p>
  <button className=" text-lg rounded-lg bg-blue-500 py-3 px-3 mt-4  hover:bg-blue-600">Show Now</button>
  </div>
    <img
    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    alt="Shopping"
    className="w-96 h-80 object-cover rounded-lg"
  /> 
</section>

<section className="w-full py-10 mt-4">
<h2 className="text-3xl font-bold text-center">Featured Categories</h2>
<div className="flex justify-center gap-6 mt-8">
    <div className="w-40 p-4 text-center border rounded-md">
        <h2 className="font-bold text-md">Electronics</h2>
    </div>
    <div className="w-40 p-4 text-center border rounded-md">
        <h2 className="font-bold text-md">Fashion</h2>
    </div>
    <div className="w-40 p-4 text-center border rounded-md">
        <h2 className="font-bold text-md">Home</h2>
    </div>
</div>
</section>
<section className="w-full py-10 px-10">
        <h2 className="text-center font-bold text-3xl">Featured Product </h2>
        <div className="flex justify-center gap-6 mt-8">
           {filteredProducts.length ===0 ? (
            <p className="text-center  text-gray-400">  No Product Found </p>
             ) :(
              filteredProducts.map((product)=> (
              <div key={product.id} 
                className="w-90 bg-blue-300 items-center p-4 border border-gray-400 rounded-lg">
                <img  src={product.image}alt={product.name}
                className="w-full h-48 object-cover rounded-lg" />
                <h3>{product.name}</h3>
                <p className="text-yellow-300 mt-1">★★★★★</p>
                <div className=" flex items-center gap-3 mt-2 ">
                <p>${product.price}</p>
                <p className="text-sm text-gray-500 line-through">
                    $129
                  </p>
                </div>
                <button onClick={()=>{
                    const existingProduct = cart.find((item)=>
                      item.id===product.id
                     );
                    if (existingProduct){
                      const updatedCart= cart.map((item)=>{
                        if(item.id===product.id){
                          return{...item, quantity:item.quantity+1,};
                        }
                       return item; 
                    });
                    setCart(updatedCart);
                  }
                    else{
                      setCart([...cart ,{...product,quantity:1}]);
                    }
                }}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white mx-auto block hover:bg-blue-700">
                    Add to Cart
                </button>
                <button onClick={()=> navigate(`/product/${product.id}`)}
                 className="mt-2 mx-auto block text-blue-600 hover:underline">
                    View Details
                  </button>
              </div>
           ))
        )}
        </div>
</section>
<section className="w-full py-12">
  <h2 className="text-3xl font-bold text-center">Deals & Offers</h2>
     <div className="max-w-6xl mx-auto mt-8 rounded-2xl bg-blue-200 p-10 flex flex-col md:flex-row items-center justify-between gap-10">
      <div>
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Limited Time Offer
            </span>
        <h3 className="text-3xl font-bold">Summer Sale</h3>
        <p className="text-2xl font-semibold mt-3">Up to 40% Off</p>
        <p className="mt-2 text-gray-600">Get amazing deals on selected products.</p>
        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
        Shop Now</button>
      </div>
            <img
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        alt="Summer Sale"
        className="w-80 h-64 object-cover rounded-xl"
        />
     </div>
</section>
<section className="w-full py-10">
  <h2 className="text-3xl font-bold text-center">Why ShopSquare?</h2>
  <div className="flex justify-center gap-5 mt-8">
       <div className="text-center">
        <Truck className="mx-auto mb-3 h-8 w-8 text-blue-500" />
        <h3 className="text-lg font-semibold">Fast Delivery </h3>
        <p className="mt-2 text-sm text-gray-600">
        Quick and reliable delivery to your doorstep. </p>
       </div>
        <div className="text-center">
        <ShieldCheck  className="mx-auto mb-3 h-8 w-8 text-blue-500" />
        <h3 className="text-lg font-semibold">Easy & Secure Payments </h3>
        <p className="mt-2 text-sm text-gray-600">
        Multiple payment options with a safe checkout experience. </p>
       </div>
        <div className="text-center">
         <RotateCcw className="mx-auto mb-3 h-8 w-8 text-blue-500" />
            <h3 className="text-lg font-semibold">Easy Returns</h3>
            <p className="mt-2 text-sm text-gray-600"> Hassle-free returns for a simple shopping experience.</p>
        </div>
  </div>
</section>
<footer className="w-full bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto py-12 px-6">
        <div>
        <h2 className="text-2xl font-bold">ShopSquare</h2>
        <p className="mt-2 text-sm text-gray-400">
            Your trusted place to shop online.
        </p>
        </div>
        <div className="flex justify-between mt-10">
        <div>
            <h3 className="font-semibold">Shop</h3>
            <p className="mt-3 text-sm text-gray-400">Categories</p>
            <p className="mt-2 text-sm text-gray-400">Products</p>
            <p className="mt-2 text-sm text-gray-400">Deals</p>
            </div>      
            <div>
            <h3 className="font-semibold">Customer Care</h3>
            <p className="mt-3 text-sm text-gray-400">Contact</p>
            <p className="mt-2 text-sm text-gray-400">Shipping</p>
            <p className="mt-2 text-sm text-gray-400">Return</p>
            </div>      
            <div>
            <h3 className="font-semibold">Company</h3>
            <p className="mt-3 text-sm text-gray-400">About </p>
            <p className="mt-2 text-sm text-gray-400">Career</p>
            <p className="mt-2 text-sm text-gray-400">Privacy</p>
            </div> 
            <div>
            <h3 className="font-semibold">Follow Us</h3>
            <p className="mt-3 text-sm text-gray-400">Instagram</p>
            <p className="mt-2 text-sm text-gray-400">facebook</p>
            <p className="mt-2 text-sm text-gray-400">Twitter</p>
            </div>      
       </div>
    </div>

</footer>

</>
);
}

export default Hero;