/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/client';
import { getCustomData } from '@core_modules/custom/services/graphql/shema';

export const getCustom = (variables) => useQuery(getCustomData, {
    variables,
});
