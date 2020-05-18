/**
 * @author psarando
 */
import build from "../DebugIDUtil";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import { formatDateObject } from "../DateFormatter";

import getFormError from "./getFormError";

const onDateChange = (prevDate, fieldName, setFieldValue) => (event) => {
    const newValue = event.target.value;
    const date = prevDate ? prevDate : new Date();
    const time = formatDateObject(date, "HH:mm:ss");

    setFieldValue(fieldName, `${newValue} ${time}`);
};

const onTimeChange = (prevDate, fieldName, setFieldValue) => (event) => {
    const newValue = event.target.value;
    const date = prevDate ? prevDate : new Date();
    const dateStr = formatDateObject(date, "YYYY-MM-DD");

    setFieldValue(fieldName, `${dateStr} ${newValue}`);
};

const FormTimestampField = ({
    id,
    label,
    required,
    field: { value, onChange, ...field },
    form: { touched, errors, setFieldValue },
    ...custom
}) => {
    const errorMsg = getFormError(field.name, touched, errors);
    const date = value && Date.parse(value);

    return (
        <FormControl error={!!errorMsg}>
            <TextField
                id={build(id, "date")}
                type="date"
                variant="outlined"
                label={label}
                error={!!errorMsg}
                required={required}
                value={date ? formatDateObject(date, "YYYY-MM-DD") : ""}
                onChange={onDateChange(date, field.name, setFieldValue)}
                {...field}
                {...custom}
            />
            <TextField
                id={build(id, "time")}
                type="time"
                variant="outlined"
                error={!!errorMsg}
                required={required}
                value={date ? formatDateObject(date, "HH:mm:ss") : ""}
                onChange={onTimeChange(date, field.name, setFieldValue)}
                {...field}
                {...custom}
            />
            <FormHelperText>{errorMsg}</FormHelperText>
        </FormControl>
    );
};

export default FormTimestampField;
