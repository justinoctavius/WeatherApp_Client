import { useEffect } from 'react';
import getGeolocation from '../utils/getGeolocation';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    getGeolocation(router);
  }, []);

  return <Loading />;
}
