import axios from "axios";
import { useEffect, useState } from "react";

export function FakeStore() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [icon, setIcon] = useState('btn btn-light mx-2 bi bi-heart');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const LoadCategories = () => {
    axios.get(`http://127.0.0.1:5050/products-categories`)
      .then(response => {
        response.data.unshift('all');
        setCategories(response.data);
      });
  };

  const LoadProducts = (url) => {
    axios.get(url)
      .then(response => {
        setProducts(response.data);
      });
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === "all") {
      LoadProducts('http://127.0.0.1:5050/products');
    } else {
      LoadProducts(`http://127.0.0.1:5050/category/${e.target.value}`);
    }
  };

  const handleAddToCartClick = (id) => {
    axios.get(`http://127.0.0.1:5050/products/${id}`)
      .then(response => {
        // Check if item is already in the cart
        const existingItem = cartItems.find(item => item.id === response.data.id);
        if (!existingItem) {
          // If item is not in cart, add it
          const updatedCart = [...cartItems, response.data];  // Create a new array including the new product
          setCartItems(updatedCart);  // Update state with the new cart array
          setCartCount(updatedCart.length); // Update cart count
          alert(`${response.data.title} added to Cart`);
        } else {
          alert(`${response.data.title} is already in the cart`);
        }
      })
      .catch(error => {
        console.error("Error adding product to cart:", error);
      });
  };
  

  const handleRemoveClick = (id) => {
    // Removing item from cart (without mutating the state)
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== id);
      setCartCount(updatedCart.length); // Updating cart count
      return updatedCart;
    });
    alert(`Item removed from Cart`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
    const ratingThreshold = parseInt(e.target.value, 10);
    axios.get('http://127.0.0.1:5050/products')
      .then(response => {
        const filteredProducts = response.data.filter(product => product.rating.rate >= ratingThreshold);
        setProducts(filteredProducts);
      });
  };

  useEffect(() => {
    LoadCategories();
    LoadProducts('http://127.0.0.1:5050/products');
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <header className="d-flex bg-danger text-light fs-6 justify-content-between p-2 border mt-2">
        <div>
          <span className="fs-4">Fakestore</span>
        </div>

        <div>
          <div className="input-group">
            <input onChange={handleSearchChange} value={searchTerm} type="text" placeholder="Search by name" className="form-control" />
            <button className="btn btn-warning bi bi-search"></button>
          </div>
        </div>

        <nav>
          <button className="text-primary btn btn-light me-2" style={{ width: '160px' }} onClick={() => LoadProducts('http://127.0.0.1:5050/products')}>All</button>
          <button className="text-primary btn btn-light" style={{ width: '160px' }} onClick={() => LoadProducts('http://127.0.0.1:5050/category/electronics')}>Electronics</button>
          <button className="text-primary ms-2 btn btn-light" style={{ width: '160px' }} onClick={() => LoadProducts(`http://127.0.0.1:5050/category/men's clothing`)}>Men's Clothing</button>
          <button className="text-primary ms-2 btn btn-light" style={{ width: '160px' }} onClick={() => LoadProducts(`http://127.0.0.1:5050/category/women's clothing`)}>Women's Clothing</button>
          <button className="text-primary ms-2 btn btn-light" style={{ width: '160px' }} onClick={() => LoadProducts('http://127.0.0.1:5050/category/jewelery')}>Jewelry</button>
        </nav>

        <div>
          <button className="btn btn-light"><span className="bi bi-person"></span></button>
          <button onClick={() => setIcon('btn btn-light mx-2 bi bi-heart-fill')} className={icon}></button>
          <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-light bi bi-cart position-relative">
            <span className="badge bg-danger rounded-circle position-absolute">{cartCount}</span>
          </button>

          {/* Cart Modal */}
          <div className="modal fade" id="cart">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="text-primary">Your Cart Items</h3>
                  <button className="btn btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td><img src={item.image} width="50" height="50" alt={item.title} /></td>
                          <td>{item.price}</td>
                          <td><button onClick={() => handleRemoveClick(item.id)} className="bi bi-trash btn btn-danger"></button></td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan="2">Total Amount:</th>
                        <td className="text-primary">{calculateTotal()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-3 row">
        <nav className="col-2">
          <div className="mb-3">
            <label className="form-label fw-bold">Select Category</label>
            <select onChange={handleCategoryChange} className="form-select">
              {categories.map(category => (
                <option value={category} key={category}>{category.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="my-3">
            <label>Rating</label>
            <div>
              <div>
                <input onChange={handleRatingChange} type="checkbox" value={4} />
                <span>4 <span className="bi bi-star-fill"></span> and above</span>
              </div>
              <div>
                <input onChange={handleRatingChange} type="checkbox" value={3} />
                <span>3 <span className="bi bi-star-fill"></span> and above</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="card m-2 p-2" style={{ width: '220px' }}>
                <img className="card-img-top" height="120" src={product.image} alt={product.title} />
                <div className="card-header overflow-auto" style={{ height: '100px' }}>
                  {product.title}
                </div>
                <div className="card-body">
                  <dl>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Rating</dt>
                    <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                  </dl>
                </div>
                <div className="card-footer">
                  <button onClick={() => handleAddToCartClick(product.id)} className="btn btn-warning w-100">
                    <span className="bi bi-cart4"> Add to Cart</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger fs-3">No products found.</p>
          )}
        </main>
      </section>
    </div>
  );
}
