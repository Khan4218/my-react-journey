import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function JournalHeader() {
  return (
    <header className="journal-header">
      <nav>
        <FontAwesomeIcon icon={faEarthAmericas} className="global-img" />
        <span className="text-head">my travel journal</span>
      </nav>
    </header>
  );
}
