import moment from "moment";
import 'moment/locale/vi';

const convertTimeToUTC = (time: string) => {
  const date = new Date(time);
  const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return utcDate.toISOString().slice(0, 16);
};
const convertTimeToDMY = (time: string) => {
  const dateTime = moment(time);
  const gmt7DateTime = dateTime.utcOffset('+07:00')  // Format the resulting GMT+7 time as Day, Month Year
  const formattedDMYTime = gmt7DateTime.format("Do MMMM YYYY")
  return formattedDMYTime;
};

const countTimeAgo = (time: string) => {
  const dateTime = moment(time);
  const gmt7DateTime = dateTime.utcOffset('+07:00')
  const timeAgo = gmt7DateTime.fromNow()
  return timeAgo;
};
export { convertTimeToUTC, convertTimeToDMY, countTimeAgo };