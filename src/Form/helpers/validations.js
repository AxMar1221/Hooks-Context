export const validateEmail = (email) => {
  const length = email.length;
  return length > 8 && length < 50 && email.includes("@") ? true : false;
};

export const validatePassword = (password) => {
  const length = password.length;
  return length > 8 && length < 50 ? true : false;
};

export const validateName = (name) => {
  const length = name.length;
  return length >= 3 && length < 50 ? true : false;
};

export const validateLastName = (lastName) => {
  const length = lastName.length;
  return length >= 3 && length < 50 ? true : false;
};

export const validatePhone = (phone) => {
  const length = phone.length;
  return length === 10 && length < 11 ? true : false;
};

export const validateAddress = (address) => {
  const length = address.length;
  return length >= 10 && length < 100 ? true : false;
};

export const validateCity = (city) => {
  const length = city.length;
  return length >= 5 && length < 100 ? true : false;
};

// export const validateEstate = (estate) => {
//   const length = estate.length;
//   return length > 5 && length < 100 ? true : false;
// };

export const estateOfMex = [
  { id: "aguascalientes", nombre: "Aguascalientes" },
  { id: "bajacalifornia", nombre: "Baja California" },
  { id: "bajacaliforniasur", nombre: "Baja California Sur" },
  { id: "campeche", nombre: "Campeche" },
  { id: "chiapas", nombre: "Chiapas" },
  { id: "chihuahua", nombre: "Chihuahua" },
  { id: "coahuila", nombre: "Coahuila" },
  { id: "colima", nombre: "Colima" },
  { id: "durango", nombre: "Durango" },
  { id: "guanajuato", nombre: "Guanajuato" },
  { id: "guerrero", nombre: "Guerrero" },
  { id: "hidalgo", nombre: "Hidalgo" },
  { id: "jalisco", nombre: "Jalisco" },
  { id: "mexico", nombre: "México" },
  { id: "michoacan", nombre: "Michoacán" },
  { id: "morelos", nombre: "Morelos" },
  { id: "nayarit", nombre: "Nayarit" },
  { id: "nuevoleon", nombre: "Nuevo León" },
  { id: "oaxaca", nombre: "Oaxaca" },
  { id: "puebla", nombre: "Puebla" },
  { id: "queretaro", nombre: "Querétaro" },
  { id: "quintanaroo", nombre: "Quintana Roo" },
  { id: "sanluispotosi", nombre: "San Luis Potosí" },
  { id: "sinaloa", nombre: "Sinaloa" },
  { id: "sonora", nombre: "Sonora" },
  { id: "tabasco", nombre: "Tabasco" },
  { id: "tamaulipas", nombre: "Tamaulipas" },
  { id: "tlaxcala", nombre: "Tlaxcala" },
  { id: "veracruz", nombre: "Veracruz" },
  { id: "yucatan", nombre: "Yucatán" },
  { id: "zacatecas", nombre: "Zacatecas" },
];
