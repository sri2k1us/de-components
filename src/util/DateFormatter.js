/**
 @author sriram
 */

import { format } from "date-fns";
import dateConstants from "../dateConstants";

/**
 * Format date with the given format or return a `-`.
 * @param longDate
 * @param dateFormat
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
function getCurrentDateFormatted(format = dateConstants.LONG_DATE_FORMAT) {
    return formatDate(Date().valueOf(), format);
}

export { formatDate, getCurrentDateFormatted };
