import moment from "moment";
import 'moment/locale/vi';

moment.locale('vi');

const convertTimeToUTC = (time: string) => {
  const date = new Date(time);
  const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return utcDate.toISOString().slice(0, 16);
};
const convertTimeToDMY = (time:string) => {
  return moment(time).format("Do MMMM YYYY");
};
const countTimeAgo = (time:string) => {
  return moment(`${convertTimeToDMY(time)}`,"Do MMMM YYYY,h:mm a").fromNow();
}
export { convertTimeToUTC, convertTimeToDMY, countTimeAgo };