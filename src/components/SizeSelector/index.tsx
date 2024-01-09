import styles from './styles.module.scss';

interface Props {
  sizes: number[];
}
export const SizeSelector = ({ sizes }: Props) => (
  <>
    <div className={styles.sizeSelector}>
      <h5>Talla</h5>
      <div className={styles.sizesGrid}>
        {sizes.map((size, index) => (
          <div key={index} className={styles.size}>{size}</div>
        ))}
      </div>
    </div>
  </>
)
