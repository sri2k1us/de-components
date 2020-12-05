import React from "react";

import { Formik, Field } from "formik";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import FormSwitch from "../src/util/forms/FormSwitch";

export const Switch = () => {
    const helperText = boolean("Helper Text", false);

    return (
        <Formik
            enableReinitialize
            initialValues={{ switch: true }}
            onSubmit={({ values }) => console.log(values)}
        >
            {() => (
                <Field
                    component={FormSwitch}
                    name="switch"
                    label="Test switch"
                    helperText={helperText && "Helper Text"}
                />
            )}
        </Formik>
    );
};

export default { title: "Form Fields", decorators: [withKnobs] };
