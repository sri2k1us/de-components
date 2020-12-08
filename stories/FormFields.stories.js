import React from "react";

import { Formik, Field } from "formik";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import {
    FormCheckbox,
    FormFieldLoading,
    FormIntegerField,
    FormMultilineTextField,
    FormNumberField,
    FormSelectField,
    FormSwitch,
    FormTextField,
} from "../src/util/FormField";

import { MenuItem } from "@material-ui/core";

const TestForm = ({ initialValue, required, children }) => {
    return (
        <Formik
            enableReinitialize
            initialValues={{ test_field: initialValue }}
            validate={(values) => {
                const errors = {};

                if (required && !values.test_field) {
                    errors.test_field = "Required";
                }

                return errors;
            }}
            onSubmit={({ values }) => console.log(values)}
        >
            {() => children}
        </Formik>
    );
};

export const TextField = () => {
    const label = text("Label", "Text Field Label");
    const helperText = text("Helper Text", "");
    const required = boolean("Required?", false);
    const loading = boolean("Loading Mask?", false);

    return (
        <TestForm required={required} initialValue="">
            <Field
                component={loading ? FormFieldLoading : FormTextField}
                name="test_field"
                label={label}
                helperText={helperText}
                required={required}
            />
        </TestForm>
    );
};

export const MultilineTextField = () => {
    const label = text("Label", "Multiline Text Field Label");
    const helperText = text("Helper Text", "");
    const required = boolean("Required?", false);

    return (
        <TestForm required={required} initialValue="">
            <Field
                component={FormMultilineTextField}
                name="test_field"
                label={label}
                helperText={helperText}
                required={required}
            />
        </TestForm>
    );
};

export const IntegerField = () => {
    const label = text("Label", "Integer Field Label");
    const helperText = text("Helper Text", "");
    const required = boolean("Required?", false);

    return (
        <TestForm required={required} initialValue="">
            <Field
                component={FormIntegerField}
                name="test_field"
                label={label}
                helperText={helperText}
                required={required}
            />
        </TestForm>
    );
};

export const NumberField = () => {
    const label = text("Label", "Number Field Label");
    const helperText = text("Helper Text", "");
    const required = boolean("Required?", false);

    return (
        <TestForm required={required} initialValue="">
            <Field
                component={FormNumberField}
                name="test_field"
                label={label}
                helperText={helperText}
                required={required}
            />
        </TestForm>
    );
};

export const SelectField = () => {
    const label = text("Label", "Select Field Label");
    const helperText = text("Helper Text", "");
    const required = boolean("Required?", false);

    return (
        <TestForm required={required} initialValue="">
            <Field
                component={FormSelectField}
                name="test_field"
                label={label}
                helperText={helperText}
                required={required}
            >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
            </Field>
        </TestForm>
    );
};

export const Checkbox = () => {
    const label = text("Label", "Checkbox Label");
    const helperText = text("Helper Text", "");

    return (
        <TestForm initialValue={true}>
            <Field
                component={FormCheckbox}
                name="test_field"
                label={label}
                helperText={helperText}
            />
        </TestForm>
    );
};

export const Switch = () => {
    const label = text("Label", "Switch Label");
    const helperText = text("Helper Text", "");

    return (
        <TestForm initialValue={true}>
            <Field
                component={FormSwitch}
                name="test_field"
                label={label}
                helperText={helperText}
            />
        </TestForm>
    );
};

export default { title: "Form Fields", decorators: [withKnobs] };
