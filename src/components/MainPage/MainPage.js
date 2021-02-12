import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadMaterials, loadProducts } from "../../actions/productsActions";
import "./MainPage.css";
import Product from "./Product";

const MainPage = ({
  products,
  loadProducts,
  loadMaterials,
  favorites,
  cart,
}) => {
  useEffect(() => {
    loadProducts();
    loadMaterials();
  }, [loadProducts, loadMaterials]);

  const [filters, setFilters] = useState({
    sortPrice: "asc",
    material: "any",
  });

  const [sortedProducts, setProducts] = useState([]);
  const { sortPrice, material } = filters;
  const { items, materials } = products;

  const onChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    items.sort(function (a, b) {
      return a.price.current_price - b.price.current_price;
    });
    setProducts(items);
  }, [items]);

  useEffect(() => {
    //filter items
    var filteredItems = [];
    if (material !== "any") {
      Object.keys(items).map((key) => {
        if (items[key].material == material) {
          filteredItems.push(items[key]);
        }
      });
    } else {
      filteredItems = [...items];
    }
    //sort items
    if (sortPrice === "asc") {
      filteredItems.sort(function (a, b) {
        return a.price.current_price - b.price.current_price;
      });
    } else {
      filteredItems.sort(function (a, b) {
        return b.price.current_price - a.price.current_price;
      });
    }
    setProducts(filteredItems);
  }, [filters, setProducts]);

  useEffect(() => {
    return () => {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("favorites", JSON.stringify(favorites));
    };
  });

  return (
    <main>
      <section>
        <div className='selector'>
          <div className='selector__title'>Сортировать по:</div>
          <select
            name='sortPrice'
            onChange={(e) => onChange(e)}
            value={sortPrice}
          >
            <option value='asc'>Цена по возрастанию</option>
            <option value='desc'>Цена по убыванию</option>
          </select>
        </div>
        <div className='selector'>
          <div className='selector__title'>Материал</div>
          <select
            name='material'
            onChange={(e) => onChange(e)}
            value={material}
          >
            <option value='any'>Любой</option>
            {Object.keys(materials).length !== 0
              ? Object.keys(materials).map((key) => {
                  return (
                    <option value={materials[key].id} key={key}>
                      {materials[key].name}
                    </option>
                  );
                })
              : ""}
          </select>
        </div>
      </section>

      <section className='products'>
        {Object.keys(sortedProducts).length === 0 ? (
          <div>Загружаем товары</div>
        ) : (
          Object.keys(sortedProducts).map((key) => {
            return <Product product={sortedProducts[key]} key={key} />;
          })
        )}
      </section>
    </main>
  );
};

MainPage.propTypes = {
  products: PropTypes.object,
  cart: PropTypes.object,
  favorites: PropTypes.object,
  loadProducts: PropTypes.func.isRequired,
  loadMaterials: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.user.cart,
  favorites: state.user.favorites,
});

export default connect(mapStateToProps, { loadProducts, loadMaterials })(
  MainPage
);
