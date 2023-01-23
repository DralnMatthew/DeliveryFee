const inputSchema = [
  {
    id: "value",
    name: "value",
    type: "string",
    placeholder: "Value",
    errorMessage: "Value should be more than 0 and shouldn't include any characters except digits!",
    label: "Cart Value(€)",
    pattern: "^[1-9][0-9]{0,}.?[0-9]{0,}$",
    required: true,
  },
  {
    id: "distance",
    name: "distance",
    type: "string",
    placeholder: "Distance",
    errorMessage: "Distance should be more than 0 and shouldn't include any characters except digits",
    label: "Delivery Distance(m)",
    pattern: "^[1-9][0-9]{0,}.?[0-9]{0,}$",
    required: true,
  },
  {
    id: "amount",
    name: "amount",
    type: "string",
    placeholder: "Amount",
    errorMessage: "Amount should be an integer larger than 0",
    label: "Amount of Items",
    pattern: "^[1-9][0-9]{0,}$",
    required: true,
  },
  {
    id: "time",
    name: "time",
    type: "datetime-local",
    label: "Time",
    pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}",
    required: true,
  },
];

export default inputSchema