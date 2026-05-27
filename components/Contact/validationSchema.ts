import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Campo obrigatório"),

  email: Yup.string()
    .email("Email Invalido")
    .required("Campo obrigatório"),

  description: Yup.string()
    .min(10, "Minimo 10 caracteres")
    .required("Campo obrigatório"),
});