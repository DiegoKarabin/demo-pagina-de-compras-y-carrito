import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { ContainerFluid } from 'src/components/ContainerFluid';
import { Container } from 'src/components/Container';
import styles from 'src/pages/Cart/styles.module.scss';
import { EmptyCart } from 'src/components/EmptyCart';
import { CartTable } from 'src/components/CartTable';

export const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      <ContainerFluid>
        <Container>
          <div className={styles.cartContainer}>
            <h2>Carrito de compras</h2>
            {cartProducts.length === 0 ? (
              <EmptyCart />
            ) : (
              <CartTable />
            )}
          </div>
        </Container>
      </ContainerFluid>
    </>
  );
};
