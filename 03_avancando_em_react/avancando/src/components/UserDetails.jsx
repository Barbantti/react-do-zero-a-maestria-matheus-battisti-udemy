import PropTypes from 'prop-types'
const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (<p>Pode tirar carteira de habilitação</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}
UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired
}
export default UserDetails;