import styles from '../data/map-settings.js'
const initMap = () => {
  let p = new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3cvEZjFjsprn2OvgnX_cqRyqfRG5Y_DA`;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
  p.then(() => {
    const coordinates = {lat: 55.846075, lng: 37.539096};
    const map = new google.maps.Map(document.querySelector(`.contacts__map`), {
      center: coordinates,
      zoom: 15,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: `/assets/img/marker.svg`,
    });
    map.setOptions({styles: styles});
  });
};
export default initMap;
