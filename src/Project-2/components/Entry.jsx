
export default function Entry(props) {

  //const mapsLink2 = "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"

  // const mapsLink3 = "https://www.google.com/maps/place/Geirangerfjord/@62.1049113,7.0051744,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?coh=164777&entry=tt&shorturl=1o.gl/maps/whXGgXTXYnZT89uW8";
  return (
    <main>
      <div className="card-1">
        <img
          className="card-img"
          src={props.img.src}
          alt={props.img.alt}
        />
        <div className="card-content">
          <div className="item-1">
            {props.locationIcon}
            <span className="country-name">{props.countryName}</span>
            {props.mapLink}
          </div>
          <h1 className="place-title">{props.placeTitle}</h1>
          <div className="place-cont">
            <p className="place-dates">{props.placeDate}</p>
            <p className="place-description">{props.placeDescription}</p>
          </div>
        </div>
      </div>
    </main>


  )
}