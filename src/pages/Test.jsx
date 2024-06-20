import CategoryButtons from "../components/orderСollection/CategoryButtons";
import { useEffect, useState } from 'react';
import ProductList from "../components/orderСollection/productList/ProductList";

const Test = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      const filtered = products.filter(product => product.cats.includes(selectedCategory));
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div className="App">
      <h1>KFC Order System</h1>
      <CategoryButtons onCategorySelect={setSelectedCategory} />
      <ProductList  products={filteredProducts} />
    </div>
  );
};

export default Test;