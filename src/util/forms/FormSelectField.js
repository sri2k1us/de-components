/**
 * @author psarando
 */
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import getFormError from "./getFormError";

const FormSelectField = ({
    id,
    field: { value, ...field },
    label,
    required,
    form: { touched, errors },
    children,
    fullWidth,
    ...custom
}) => {
    const errorMsg = getFormError(field.name, touched, errors);
    return (
        <FormControl fullWidth={fullWidth} error={!!errorMsg}>
            <InputLabel htmlFor={id} required={required}>
                {label}
            </InputLabel>
            <Select id={id} value={value || ""} {...field} {...custom}>
                {children}
            </Select>
            <FormHelperText>{errorMsg}</FormHelperText>
        </FormControl>
    );
};

FormSelectField.defaultProps = {
    fullWidth: true,
};

export default FormSelectField;
