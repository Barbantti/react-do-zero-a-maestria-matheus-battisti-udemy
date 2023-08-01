import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>More information about product: {id}</h1>
    </div>
  )
}

export default Info;