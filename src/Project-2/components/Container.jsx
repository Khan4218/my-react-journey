import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Container() {
  const mapsLink1 = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
  const mapsLink2 = "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
  const mapsLink3 = "https://www.google.com/maps/place/Geirangerfjord/@62.1049113,7.0051744,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?coh=164777&entry=tt&shorturl=1o.gl/maps/whXGgXTXYnZT89uW8";
  return (
    <main>
      <div className="card-1">
        <img
          className="card-img"
          src="../src/project-2/images/image1.jpg"
          alt="Mount Fuji"
        />
        <div className="card-content">
          <div className="item-1">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <span className="country-name">JAPAN</span>
            <a href={mapsLink1} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>
          </div>
          <h1 className="place-title">Mount Fuji</h1>
          <div className="place-cont">
            <p className="place-dates">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="place-description">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular tourist
              site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>


      <div className="card-1">
        <img
          className="card-img"
          src="../src/project-2/images/image2.jpg"
          alt="Sydney opera house"
        />
        <div className="card-content">
          <div className="item-1">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <span className="country-name">AUSTRALIA</span>
            <a href={mapsLink2} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>
          </div>
          <h1 className="place-title">Sydney Opera House</h1>
          <div className="place-cont">
            <p className="place-dates">27 May, 2023 - 8 Jun, 2023</p>
            <p className="place-description">
              The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.
            </p>
          </div>
        </div>
      </div>


      <div className="card-1">
        <img
          className="card-img"
          src="../src/project-2/images/image3.jpg"
          alt="Geirangerfjord"
        />
        <div className="card-content">
          <div className="item-1">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <span className="country-name">NORWAY</span>
            <a href={mapsLink3} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>
          </div>
          <h1 className="place-title">Geirangerfjord</h1>
          <div className="place-cont">
            <p className="place-dates">01 Oct, 2024 - 18 Nov, 2024</p>
            <p className="place-description">
              The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.
            </p>
          </div>
        </div>
      </div>

    </main>


  )
}