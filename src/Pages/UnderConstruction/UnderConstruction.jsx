import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UnderConstruction.css'

const UnderConstruction = () => {
    return (
        <div className="container under-construction">
            <FontAwesomeIcon icon={faScrewdriverWrench} size="3x" />
            <h2>Page is Under Construction</h2>
        </div>
    )
}

export default UnderConstruction;