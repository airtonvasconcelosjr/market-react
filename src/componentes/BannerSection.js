import React from 'react';

const BannerSection = ({ banners }) => {
  return (
    <div>
      {banners && banners.length > 0 ? (
        banners.map((banner) => (
          <div key={banner.id}>
            <img src={'https://assets.instabuy.com.br/ib.store.banner/bnr-' + banner.image} alt={banner.title} />
            <p>{banner.title}</p>
          </div>
        ))
      ) : (
        <p>Carregando Banners...</p>
      )}
    </div>
  );
};

export default BannerSection;
