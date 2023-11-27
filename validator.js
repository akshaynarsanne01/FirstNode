const Ajv = require("ajv");
const ajv = new Ajv();

function validatemydata(data) {
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string", minLength: 3, pattern: "@" },
    },
    required: ["name", "email"],
  };
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  if (isValid) {
    return { valid: "true", data: data };
  } else {
    return { valid: "false", data: validate.errors[0].message };
  }
}
module.exports = validatemydata;
