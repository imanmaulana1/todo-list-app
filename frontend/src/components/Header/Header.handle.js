import moment from 'moment';

const formatDate = (date) => {
  return moment(date).format('dddd, D MMMM YYYY');
};

export { formatDate };
