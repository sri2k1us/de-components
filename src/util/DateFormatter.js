/**
 @author sriram
 */

import { format } from "date-fns";
import dateConstants from "../dateConstants";

/**
 * Format date with the given format or return a `-`.
 * @param longDate
 * @param dateFormat
 * @returns {string}
 */
function formatDate(longDate, dateFormat = dateConstants.LONG_DATE_FORMAT) {
    const longDateInt = parseInt(longDate, 10);
    return longDateInt
        ? format(new Date(longDateInt), dateFormat)
        : dateConstants.EMPTY_DATE;
}

/**
 * Format current date with the give format
 * @param format
 * @returns {string}
 */
function formatCurrentDate(format = dateConstants.LONG_DATE_FORMAT) {
    return formatDate(Date().valueOf(), format);
}

/**
 * Format Date object with the give format
 * @param Date Object
 * @param format
 * @returns {string}
 */
function formatDateObject(dateObj, dateFormat) {
    return formatDate(dateObj.valueOf(), dateFormat);
}

export { formatDate, formatCurrentDate, formatDateObject };
