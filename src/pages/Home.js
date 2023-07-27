import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [categoriesData, setcategoriesData] = useState(null);
  const [banners, setBanners] = useState(null);
  const [promo, setPromo] = useState(null);
  const BASE_URL = 'https://api.instabuy.com.br/apiv3/';
  const subdomain = 'supermercado';

  const apiUrl = `${BASE_URL}layout?subdomain=${subdomain}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setcategoriesData(response.data.data.collection_items);
        setBanners(response.data.data.banners);
        setPromo(response.data.data.promo);
      })
      .catch((error) => {
        console.error('Erro ao acessar a API:', error);
      });
      
  }, []);

  return (
    <div>
         {banners && banners.length > 0 ? (
        banners.map((banner) => (
          <div key={banner.id}>
            {banner.image && <img src={'https://assets.instabuy.com.br/ib.store.banner/bnr-' + banner.image} alt={banner.title} />}
          </div>
        ))
      ) : (
        <p>Carregando Banners...</p>
      )}
      {promo && promo.length > 0 ? (
        promo.map((item) => (
          <div key={item.id}>
               {item.images && <img src={'https://assets.instabuy.com.br/ib.item.image.small/s-' + item.images[0]} alt={item.name} />}
               <p>{item.name}</p>
               <p>{item.prices[0].price}</p>
               <p>{item.prices[0].promo_price}</p>
               <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>Carregando Promo...</p>
      )}
      {categoriesData && categoriesData.length > 0 ? (
        categoriesData.map((categoria) => (
          <div key={categoria.id}>
            {categoria.items && categoria.items.length > 0 ? (
              categoria.items.map((item) => (
                <div key={item.id}>
                   {item.images && <img src={'https://assets.instabuy.com.br/ib.item.image.small/s-' + item.images[0]} alt={item.name} />}
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

export default Home;
