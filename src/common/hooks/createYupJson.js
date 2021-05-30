import * as yup from "yup";

import memoize from "fast-memoize";

// create a yup schema for validation from a list of object

function yupMaker(schema, config) {
  const { name, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[name] = validator;
  return schema;
}
// using with reduce schema => acc , config => el

export function yupSchemaCreator(schema, config) {
  const { name, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    if (type === "of") {
      validator = validator[type](yup.object().shape(params));
    } else {
      validator = validator[type](...params);
    }
  });
  schema[name] = validator;

  return schema;
}

// ALT for memoize but fast-memoize is better

const sechemaReducer = (data) => data.reduce(yupSchemaCreator, {});

// memoizing function for all schecma to use schema other places
// ... and less rendering

const memoSchema = memoize(sechemaReducer);

// factory design pattern for a yup creation from obj
export const yupFactory = (data, key) => {
  const schema = yup.object().shape(memoSchema(key, data));
  const checkFiled = async (name, value) => {
    try {
      await schema.validateAt(
        name,
        {
          [name]: value,
        },
        { abortEarly: false }
      );
      return "";
    } catch (err) {
      const message =
        err &&
        err.errors &&
        err.errors.reduce(
          (acc, er, index) => `${acc}${index > 0 ? "/" : ""} ${er}`,
          ""
        );
      return message;
    }
  };

  const checkValidation = async (vals) => {
    try {
      await schema.validate(vals, { abortEarly: false });
      let messages = {};
      for (let key in vals) {
        messages[key] = "";
      }

      return ["", messages];
    } catch (err) {
      const output =
        err &&
        err.inner &&
        err.inner.reduce(
          (acc, error, index) => {
            const { path, message } = error;
            const mes = `${acc[0] || ""}${index > 0 ? "/" : ""} ${message}`;
            const allmes = {
              ...acc[1],
              [path]: `${acc[1][path] || ""}${
                acc[1][path] ? "/" : ""
              } ${message}`,
            };

            return [mes, allmes];
          },
          ["", {}]
        );

      return output;
    }
  };
  return [checkFiled, checkValidation];
};

export default yupMaker;
