import { useRouter } from 'next/router'

export default function Books() {
  const router = useRouter();
  return <h1>{JSON.stringify(router)}</h1>
}