import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import ProductList from "./components/ProductList";
import { app } from "./firebase/firebase";
 // Import your Firebase app instance


function App() {
  const [deals, setDeals] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch deals from Firebase
    const dealsRef = ref(getDatabase(app), 'deals');
    onValue(dealsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        setDeals(data);
      }
    });

    // Fetch all products from Firebase
    const allProductsRef = ref(getDatabase(app), 'allProducts');
    onValue(allProductsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        setAllProducts(data);
      }
    });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Categories />
        <ProductList heading="Top Deals Now" products={deals} />
        <ProductList heading="All Products" products={allProducts} />
      </main>
    </div>
  );
}

export default App;
