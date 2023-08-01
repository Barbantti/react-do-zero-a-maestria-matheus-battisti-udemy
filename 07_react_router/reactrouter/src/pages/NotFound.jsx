import NotFoundImg from '../assets/404-error-page.svg';
const NotFound = () => {
  return (
    <div>
      <h1><img src={NotFoundImg} alt="No, there is nothing here" /></h1>
    </div>
  )
}

export default NotFound;