import LinkIcon from "./LinkIcon.jsx"
import PreviewHeader from "./PreviewHeader.jsx"

function IllustrationPhone ({image, firstName, lastName, email }){
    return (
        <div className="illustration-container brd-rds">
            <div className="illustration">
            <div className="profile-info">
            <img src={image} alt="profile" />
            {/* <div className="info"> */}
                <h2>{firstName} {lastName}</h2>
                <p>{email}</p>
                {/* </div> */}
            </div>
            <div className="data-info">
                <LinkIcon  />
            </div>
            </div>

        </div>
    )
}

export default IllustrationPhone