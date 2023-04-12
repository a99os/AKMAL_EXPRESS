export const isLoginData = (date) => {
  return new Date(date).getTime() - new Date().getTime() > 0;
};
