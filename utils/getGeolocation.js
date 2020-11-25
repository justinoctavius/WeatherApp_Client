export default function getGeolocation(router) {
  if (typeof window !== 'undefined') {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(geolocation => {
        const { coords } = geolocation;
        const { latitude, longitude } = coords;
        router.push(
          `http://localhost:3000/weather/?lat=${latitude}&lon=${longitude}`
        );
      });
    }
  }
}
