// regex.jsx
export const nameRegex = /^[A-Za-z]+$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[0-9]{1,3}[\s]?[0-9]{10}$/;
export const zipRegex = /^[0-9]{1,6}$/;
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
