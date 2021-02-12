import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} from "../../actions/userActions";

const Product = ({
  product,
  addToCart,
  removeFromCart,
  cart,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) => {
  return (
    <div className='product'>
      {product.price.old_price ? (
        <div className='product__sale'>Скидка</div>
      ) : (
        ""
      )}
      <img
        className='product__image'
        src={product.image.url}
        alt={product.name}
      />
      <div className='product__code'>{product.code}</div>
      <div className='product__title'>{product.name}</div>
      <div className='product__actionsAndPriceBlock'>
        <div className='product__price'>
          {product.price.old_price ? (
            <span className='product__oldPrice'>
              {product.price.old_price}₽
            </span>
          ) : (
            ""
          )}
          {product.price.current_price}₽
        </div>
        <div className='product__actions'>
          {cart[product.id] ? (
            <img
              src='images/icons/inCart.svg'
              className='product__addToCart'
              alt='Убрать из корзины'
              title='Убрать из корзины'
              onClick={() => removeFromCart(product.id)}
            />
          ) : (
            <img
              src='images/icons/cart.svg'
              className='product__addToCart'
              alt='Добавить в корзину'
              title='Добавить в корзину'
              onClick={() => addToCart(product)}
            />
          )}

          {favorites[product.id] ? (
            <img
              src='images/icons/redFavorite.svg'
              alt='Убрать из избранного'
              title='Убрать из избранного'
              onClick={() => removeFromFavorites(product.id)}
            />
          ) : (
            <img
              src='images/icons/favorite.svg'
              alt='Добавить в избранное'
              title='Добавить в избранное'
              onClick={() => addToFavorites(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cart: PropTypes.object,
  favorites: PropTypes.object,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.user.cart,
  favorites: state.user.favorites,
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
})(Product);
