import moment from 'moment';

const formatDate = (date) => {
  return moment(date).format('dddd, MMMM Do YYYY');
};

export { formatDate };
