/* eslint-disable no-nested-ternary */
import { getHost } from '@helpers/config';
import Drawer from '@material-ui/core/Drawer';
import Typogrphy from '@common_typography';
import Button from '@common_button';
import useStyles from './style';
import Item from './item';

const SharePopup = ({
    open = false,
    setOpen = () => {},
    link = getHost(),
    t,
}) => {
    const styles = useStyles();
    return (
        <Drawer
            anchor="bottom"
            onClose={setOpen}
            open={open}
            className={styles.root}
            BackdropProps={{ invisible: true }}
            color="transparent"
        >
            <div className={styles.container}>
                <Typogrphy className={styles.title} variant="title">
                    {t('product:shareTitle')}
                </Typogrphy>
                <Item link={link} />
                <Button
                    className={styles.btnCancel}
                    color="secondary"
                    onClick={setOpen}
                >
                    {t('common:button:cancel')}
                </Button>
            </div>
        </Drawer>
    );
};

export default SharePopup;
