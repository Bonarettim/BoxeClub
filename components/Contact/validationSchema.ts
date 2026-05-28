import * as Yup from "yup";

const campoObrigatorio = "Campo obrigatório";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required(campoObrigatorio),

  email: Yup.string()
    .email("Email Invalido")
    .required(campoObrigatorio),

  description: Yup.string()
    .min(10, "Minimo 10 caracteres")
    .required(campoObrigatorio),
});