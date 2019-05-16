/**
 @author sriram
 */

import moment from "moment";
import dateConstants from "../dateConstants";
/**
 * Format date with the given format or return a `-`.
 * @param longDate
 * @param format
 */
function formatDate(longDate, format = dateConstants.LONG_DATE_FORMAT) {
    const longDateInt = parseInt(longDate, 10);
    return longDateInt
        ? moment(longDateInt, "x").format(format)
        : dateConstants.EMPTY_DATE;
}

function getCurrentDateFormatted(format = dateConstants.LONG_DATE_FORMAT) {
    return formatDate(Date().valueOf(), format);
}

export { formatDate, getCurrentDateFormatted };
