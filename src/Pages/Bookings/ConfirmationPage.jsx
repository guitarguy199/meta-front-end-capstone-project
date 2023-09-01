import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ConfirmationPage = () => {
    return (
    <div className="container confirmed-booking">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Reservation Confirmed!</h2>
        <p>Please check your email for details on your booking.</p>
    </div>
    );
}

export default ConfirmationPage;