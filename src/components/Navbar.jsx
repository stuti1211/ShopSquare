import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";


function Navbar ({search,setSearch,setCategory}){
//const cart = useSelector((state) => state.cart);
const [showCategories, setShowCategories] = useState(false);

//console.log("Navbar",cart); 
console.log("react-redux", cart);
const cartCount = cart.reduce(
  (total, item) => total + item.quantity, 0
);
return(
    
<nav className="w-full flex items-center py-4 px-4 gap-4">
        <div className="w-1/5">
         <h1 className="text-4xl font-bold text-blue-500">ShopSquare</h1>
         </div>
         <div className="flex gap-6 w-1/3 ">
         <Link to="/" className="text-md font-semibold">Home</Link>
         <div className="relative">
          <button  onClick={()=>setShowCategories(!showCategories)}
               className="text-md font-semibold" >
               Categories
          </button>
         {showCategories && (
               <div className="absolute left-0 top-full mt-2 w-30 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
               <button onClick={()=>setCategory("Electronics")}
               className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                    Electronics
                    </button >
                    <button onClick={()=>setCategory("Clothing")}
                     className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                         Clothing
                    </button>
                    <button onClick={()=>setCategory("Shoes")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                         Shoes
                    </button>
                    <button onClick={()=>setCategory("Beauty")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                         Beauty
                    </button>
               </div>
               )}
           </div>    
          {/* <h2 className="text-md font-semibold ">Home</h2>
         <h2 className="text-md font-semibold ">Categories</h2> */}
         </div>
    <div className="w-1/3 mx-auto flex justify-center">
      <div className="flex items-center gap-0.5 ">
            <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 rounded-lg border border-gray-500 px-4 py-2 outline-none"
            />
         <button className="rounded-lg bg-blue-400 px-4 py-2 text-white">
            Search
        </button>
            </div>
       </div>        
            <div className="w-1/3 flex justify-end gap-7 ">
            <h2 className="text-md font-semibold">Wishlist</h2>
            <Link to="/cart" className="text-md font-semibold">
               Cart ({cartCount})
               </Link>
            <h2 className="text-md font-semibold ">Login/SignUp</h2>
           </div>      
</nav>
);
}
export default Navbar;