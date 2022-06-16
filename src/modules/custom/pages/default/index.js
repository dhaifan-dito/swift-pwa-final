import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import Core from '@core_modules/custom/pages/default/core';
import Content from '@core_modules/custom/pages/default/components';
import Skeleton from '@core_modules/custom/pages/default/components/skeleton';

const Default = (props) => (
    <Core {...props} Content={Content} Skeleton={Skeleton} />
);

Default.getInitialProps = async () => ({
    namespacesRequired: ['custom'],
});

export default withApollo({ ssr: true })(withTranslation()(Default));
