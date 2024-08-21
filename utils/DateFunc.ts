export const diffDates = (d1: any, d2: any) => {
  const date1: any = new Date(d1);
  const date2: any = new Date(d2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const changeDateTimeFormat = (str: any) => {
  const date = new Date(str).toString().split(" ");
  const t = date[4].split(":");
  const hour = Number(t[0]);
  const time = hour >= 12 ? `${hour - 12}:${t[1]} PM` : `${hour}:${t[1]} AM`;
  const dateTime = date[1] + " " + date[2] + " " + date[3] + "," + time;
  return dateTime;
};
