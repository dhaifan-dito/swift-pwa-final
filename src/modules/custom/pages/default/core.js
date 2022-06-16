/* eslint-disable no-param-reassign */
import { PropTypes } from 'prop-types';
import Layout from '@layout';
import { getCustom } from '@core_modules/custom/services/graphql';
import Image from '@common_image';
import ComponentCustom from '@core_modules/commons/ComponentCustom/index';

const Base = (props) => {
    const {
        Skeleton, pageConfig, t,
    } = props;
    const { data, loading } = getCustom({ pageSize: 100, currentPage: 1 });
    const config = {
        title: t('brands:title'),
        header: 'relative', // available values: "absolute", "relative", false (default)
        headerTitle: t('brands:title'),
        headerBackIcon: 'arrow', // available values: "close", "arrow"
        bottomNav: false,
        pageType: 'brands',
    };
    if (loading) {
        return (
            <Layout {...props} pageConfig={pageConfig || config}>
                <Skeleton {...props} />
            </Layout>
        );
    }
    const { products } = data;

    return (
        <Layout {...props} pageConfig={pageConfig || config}>
            <ComponentCustom />
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                {
                    products.items.map((item) => (
                        <div>
                            <p>{item.name}</p>
                            <div style={{
                                height: '300px', width: '300px', border: '1px solid black', marginBottom: '10px',
                            }}
                            >
                                <Image src={item.small_image.url} width={1000} height={1000} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    );
};

Base.propTypes = {
    Content: PropTypes.func,
    Skeleton: PropTypes.func,
};

Base.defaultProps = {
    Content: () => {},
    Skeleton: () => {},
};

export default Base;
