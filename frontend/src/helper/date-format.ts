import moment from "moment";

export const getDateLocal = (date: any) => {
  return moment(date).format("DD MMM YYYY");
};
