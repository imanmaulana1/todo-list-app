import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Puff
        visible={true}
        height='80'
        width='80'
        color='var(--primary-color)'
        ariaLabel='puff-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </>
  );
};

export default Loader;
