import { useState } from "react";
import { yupFactory } from "./createYupJson";
import * as R from "ramda";

// using yup for validation as a hook

export default function useValidation(init) {
  const [errors, setErrors] = useState({});
  const { data, key } = init;
  const [checker, checkVal] = yupFactory(data, key);

  async function checkFiled(name, value) {
    const message = await checker(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  }

  async function checkValidation(values) {
    const [mess, allmess] = await checkVal(values);

    if (mess) {
      setErrors((prev) => ({
        ...prev,
        ...allmess,
      }));

      return false;
    }
    return true;
  }

  return { errors, checkFiled, checkValidation };
}

// mapper create a simple validation form to use in redux models

const mapper = (field) => {
  const [name, validationType, size = 1] = field;

  if (validationType === "time")
    return {
      name: `${name}`,
      validationType: "string",
      validations: [
        {
          type: "required",
          params: ["is required"],
        },
        {
          type: "matches",
          params: [
            /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
            {
              message: " must be HH:MM:SS",
              excludeEmptyString: false,
            },
          ],
        },
      ],
    };

  if (validationType === "array") {
    return {
      name: `${name}`,
      validationType: "array",
      validations: [
        {
          type: "required",
          params: ["is required"],
        },
        {
          type: "length",
          params: [size, "is required"],
        },
      ],
    };
  }

  return {
    name: `${name}`,
    validationType,
    validations: [
      {
        type: "required",
        params: ["is required"],
      },
    ],
  };
};

export const mapFieldArrToObjSchema = R.map(mapper);
