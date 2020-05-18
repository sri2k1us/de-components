/**
 * @author psarando
 */
import TextField from "@material-ui/core/TextField";
import getFormError from "./getFormError";

const FormTextField = ({
    field,
    label,
    required,
    form: { touched, errors },
    ...custom
}) => {
    const errorMsg = getFormError(field.name, touched, errors);
    return (
        <TextField
            label={label}
            error={!!errorMsg}
            helperText={errorMsg}
            required={required}
            variant="outlined"
            margin="dense"
            fullWidth
            {...field}
            {...custom}
        />
    );
};

export default FormTextField;
