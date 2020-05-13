import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const Context = React.createContext({
  //defaultValue
  products: [],
  detail: {},
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  isModalOpen: false,
  modalProd: {},
});

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalProd, setModalProd] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //not to change the original data
  // Initializing a copy of products data to state
  useEffect(() => {
    // Initializing a new copy of products when app loads and when we clear cart
    if (!cart.length) {
      let products = [];
      storeProducts.forEach((item) => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      });
      setProducts(products);
    }
  }, [cart]);

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    const tempCart = [...cart, product];
    setCart(tempCart);
  };

  const getItem = (id) => products.find((item) => item.id === id);

  const openModal = (id) => {
    const product = getItem(id);
    setModalProd(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.price * product.count;

    setCart(tempCart);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (!product.count) {
      removeItem(id);
    } else {
      product.total = product.price * product.count;

      setCart(tempCart);
      addTotals();
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    //////
    addTotals();
  };

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <Context.Provider
      value={{
        products,
        detail,
        handleDetail,
        addToCart,
        openModal,
        isModalOpen,
        closeModal,
        modalProd,
        cartSubTotal,
        cartTax,
        cartTotal,
        increment,
        decrement,
        removeItem,
        clearCart,
        addTotals,
        cart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ProductProvider };
