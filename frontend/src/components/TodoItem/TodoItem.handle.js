import moment from 'moment';

const formattedDate = (date) => {
  return moment(date).format('h:mm A, DD/MM/YYYY');
};

export { formattedDate };
