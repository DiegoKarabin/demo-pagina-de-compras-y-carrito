import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ProductSlide } from '../ProductSlide';
import { Product } from '../../types';
import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
  products: Product[];
}
export const ProductsSlider = ({ products }: Props) => {
  useEffect(() => {

  }, []);

  return (
    <>
      <div className={styles.productsSlider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={35}
          slidesPerView={4}
          navigation
        >
          {products.map((product, index) => {
            const { foto, nombre, precio } = product;

            return (
              <SwiperSlide key={index}>
                <ProductSlide
                  imagesUrls={[`/img/${foto}`]}
                  productName={nombre}
                  price={precio}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
