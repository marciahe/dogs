export function validate1(userData, errors, setErrors) {
  const regexEmail = /^(?=.{5,35}$)[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!userData.email) {
    setErrors({ ...errors, email: "Ingresa tu email" });
  } else if (!regexEmail.test(userData.email)) {
    setErrors({ ...errors, email: "Ingresa un email válido" });
  } else {
    setErrors({ ...errors, email: "" });
  }
}

export function validate2(userData, errors, setErrors) {
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).+$/;

  if (userData.password.length < 8) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener al menos 8 caracteres",
    });
  } else if (!regexPassword.test(userData.password)) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener al menos una letra y un número",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
}
