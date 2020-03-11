import { useRouter } from 'next/router'
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

import Axios from 'axios';
function Books(props) {
  console.log('goodbye');
  const router = useRouter();
  const { data } = useSWR("/api/test", fetcher);
  return <>
      <h1>Osei</h1>
      <div>{JSON.stringify(props)}</div>
      <div>{JSON.stringify(data)}</div>
    </>
}

Books.getInitialProps = async function(context){
  console.log(context);
  const response = await Axios.get('http://localhost:3000/api/test');
  console.log('hello');
  return {
    data: response.data
  }
}


export default Books