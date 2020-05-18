/**
 * @author psarando
 */

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Apparently only necessary for FastField, but maybe more correct for "vanilla" Field as well.
const onCheckboxChange = (setFieldValue, fieldName) => (event, checked) => {
    setFieldValue(fieldName, checked);
};

const FormCheckbox = ({
    label,
    field: { value, onChange, ...field },
    form: { setFieldValue },
    ...custom
}) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={!!value}
                onChange={onCheckboxChange(setFieldValue, field.name)}
                {...field}
                {...custom}
            />
        }
        label={label}
    />
);

export default FormCheckbox;
export { onCheckboxChange };
