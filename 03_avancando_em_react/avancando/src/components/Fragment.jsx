import PropTypes from 'prop-types';
const Fragment = ({ propFragment }) => {
  return (
    <>
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propFragment}</h4>
    </>
  )
}

Fragment.propTypes = {
  propFragment: PropTypes.string.isRequired
};

export default Fragment;