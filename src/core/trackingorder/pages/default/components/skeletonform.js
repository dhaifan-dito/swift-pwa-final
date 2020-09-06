import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './style';

const SkeletonForm = () => {
    const styles = useStyles();
    return (
        <>
            <Skeleton className={styles.skeletonForm} variant="rect" width="100%" height={30} />
            <Skeleton className={styles.skeletonForm} variant="rect" width="100%" height={30} />
            <Skeleton className={styles.skeletonForm} variant="rect" width="100%" height={30} />
        </>
    );
};

export default SkeletonForm;
