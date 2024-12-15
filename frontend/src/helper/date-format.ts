import moment from "moment";

export const getDateLocal = (date: any) => {
  return moment(date).format("DD MMM YYYY");
};

export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};
