import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
export const FooterInfoTitle = ({ children, className }: Props) => (
  <h4 className={`text-uppercase ${className ?? ''}`}>{children}</h4>
);
