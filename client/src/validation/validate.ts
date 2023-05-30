import * as Yup from "yup";

interface ValidationErrors {
  [key: string]: string;
}

const regex = {
  alphaNumeric: /^[A-Za-z0-9._ ]+$/,
  alpha: /^[A-Za-z]+$/,
  numeric: /^[0-9]+$/,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  username: Yup.string()
    .required("Username is required")
    .matches(regex.alphaNumeric, "Username must be alphanumeric")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  password: Yup.string().required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),

});

const validateValues = <T>(values: T, schema: Yup.ObjectSchema<any>): ValidationErrors => {
  try {
    schema.validateSync(values, { abortEarly: false });
    return {};
  } catch (err:any) {
    const errors: ValidationErrors = {};
    err.inner.forEach((e: Yup.ValidationError) => {
        if (e.path) {
            errors[e.path] = e.message;
        }
    });
    return errors;
  }
};

const dataValidation = (values: any): ValidationErrors =>
  validateValues(values, validationSchema);

export { dataValidation };
