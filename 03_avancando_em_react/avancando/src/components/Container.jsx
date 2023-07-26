import PropTypes from 'prop-types';

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este e o titulo do container</h2>
      {children}
      <p>O valor e: {myValue}</p>
    </div>
  )
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  myValue: PropTypes.string.isRequired
};


export default Container;