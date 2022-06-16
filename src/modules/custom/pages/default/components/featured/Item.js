/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Router from 'next/router';
import useStyles from '@core_modules/brands/pages/default/components/featured/style';

const ItemFeatured = (props) => {
    const styles = useStyles();
    const {
        key, small_image, name, category_url,
    } = props;
    return (
        <div
            key={key}
            className={styles.container}
            onClick={() => (category_url ? Router.push('/[...slug]', `/${category_url.replace('.html', '')}`) : null)}
        >
            <img className={styles.imgBrand} src={small_image} alt={name} />
        </div>
    );
};

export default ItemFeatured;
