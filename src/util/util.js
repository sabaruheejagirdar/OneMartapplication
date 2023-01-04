export const fetchUserRole = () => localStorage.getItem("user_role");

export const alertMessage = (message) =>
  window.dispatchEvent(new CustomEvent("alert", { detail: message }));

export const getBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};
