/**
 * @author psarando
 */
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";

// Apparently only necessary for FastField, but maybe more correct for "vanilla" Field as well.
const onCheckboxChange = (setFieldValue, fieldName) => (event, checked) => {
    setFieldValue(fieldName, checked);
};

const FormCheckboxTableCell = ({
    field: { value, onChange, ...field },
    form: { setFieldValue },
    ...custom
}) => (
    <TableCell padding="checkbox">
        <Checkbox
            color="primary"
            checked={!!value}
            onClick={(event) => event.stopPropagation()}
            onChange={onCheckboxChange(setFieldValue, field.name)}
            {...custom}
        />
    </TableCell>
);

export default FormCheckboxTableCell;
