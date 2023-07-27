import React from 'react';

const PromoSection = ({ promo }) => {
  return (
    <div>
      {promo && promo.length > 0 ? (
        promo.map((item) => (
          <div key={item.id}>
            <img src={'https://assets.instabuy.com.br/ib.item.image.small/s-' + item.images[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.prices[0].price}</p>
            <p>{item.prices[0].promo_price}</p>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>Carregando Promo...</p>
      )}
    </div>
  );
};

export default PromoSection;
