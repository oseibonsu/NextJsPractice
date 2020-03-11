import { useRouter } from 'next/router'
import Axios from 'axios';
function Books(props) {
  const router = useRouter();
  return <>
      <div>{JSON.stringify(props)}</div>
    </>
}

Books.getInitialProps = async function(context){
  const response = await Axios.get('http://localhost:3000/api/test');
  console.log(response.data);

  return {
    data: response.data
  }
}


export default Books