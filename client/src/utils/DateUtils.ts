import { parse, parseISO, format } from 'date-fns';

export const DD_MM_YYYY = 'dd/MM/yyyy';
export const FULL_DAY_MONTH_YEAR = 'dd MMM yyyy';

export const getNewFormattedDate = (dateLike: string, dateFormat = DD_MM_YYYY) =>
	parse(dateLike, dateFormat, new Date());

export const formatDate = (dateLike: string, dateFormat = FULL_DAY_MONTH_YEAR) =>
	format(parseISO(dateLike), dateFormat);
