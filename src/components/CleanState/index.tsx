import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetSelectedSize, setTryingToAddToCart } from 'src/features/product/productSlice';

interface Props {
  children: ReactNode;
}
export const CleanState = ({ children }: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSelectedSize());
    dispatch(setTryingToAddToCart(false));
  }, [dispatch, location.pathname]);

  return <>{ children }</>
};
