import React from 'react';

const ProductSection = ({ categoriesData }) => {
  return (
    <div>
      {categoriesData && categoriesData.length > 0 ? (
        categoriesData.map((categoria) => (
          <div key={categoria.id}>
            {categoria.items && categoria.items.length > 0 ? (
              categoria.items.map((item) => (
                <div key={item.id}>
                  <img src={'https://assets.instabuy.com.br/ib.item.image.small/s-' + item.images[0]} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.prices[0].price}</p>
                  <p>{item.prices[0].promo_price}</p>
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <p>Nenhum produto encontrado nesta categoria.</p>
            )}
          </div>
        ))
      ) : (
        <p>Carregando categorias...</p>
      )}
    </div>
  );
};

export default ProductSection;
