import React from 'react'
import { Formik } from "formik"
import PropTypes from 'prop-types';

interface FormikInterface {
    validationSchema: any,
    values: any,
    handleSubmit: any,
    handleChange: any,
    children: any
 }
const FormsWrapper: React.FC<FormikInterface>  = (props) => {
    let { children, values, handleSubmit, validationSchema } = props
    return (
        <Formik
            {...props}
            initialValues={values}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
        >
            {children}
        </Formik>

    )
}

FormsWrapper.propTypes = {
    validationSchema: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
};

export default FormsWrapper;


export const showFieldError = (name: string, errors:any, touched: any) => {
    return (
        <>
            {touched[name] && errors[name] && errors[name].trim() !== "" ?
                <div className="mb-2">
                    <small className="text-danger">{errors[name]}</small>
                </div>

                : null}
        </>

    )
}

// export const MyTextInput = (props: OtherProps & FormikProps<FormValues>) => {
//     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//     // which we can spread on <input>. We can use field meta to show an error
//     // message if the field is invalid and it has been touched (i.e. visited)
//     let {label, ...attrs} = props
//     const [field, meta] = useField(attrs);
//     return (
//       <>
//         <label htmlFor={props.id || props.name}>{label}</label>
//         <input className="text-input" {...field} {...props} />
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </>
//     );
//   };