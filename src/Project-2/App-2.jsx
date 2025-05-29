import JournalHeader from "./components/Header-2";
import Entry from "./components/Entry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import image1 from "../Project-2/images/image1.jpg"

const mapsLink1 = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"

export default function App() {
  return (
    <main>
      <JournalHeader />
      <div className="card-1">
        <Entry
          img={{
            src: image1,
            alt: "Mount Fuji"
          }}
          locationIcon={<FontAwesomeIcon icon={faLocationDot} className="location-icon" />}
          countryName="JAPAN"
          mapLink={<a href={mapsLink1} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>}
          placeTitle="Mount Fuji"
          placeDate={"12 Jan, 2021 - 24 Jan, 2021"}
          placeDescription={`Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan,for both Japanese and foreign tourists.`}
        />
      </div>
    </main>
  )
}