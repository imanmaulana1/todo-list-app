import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
      visible={true}
      height='80'
      width='80'
      color='var(--primary-color)'
      ariaLabel='puff-loading'
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '30vh',
      }}
    />
  );
};

export default Loader;
