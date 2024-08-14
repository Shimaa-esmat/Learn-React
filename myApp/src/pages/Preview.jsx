// import PreviewHeader from "../components/PreviewHeader";
import logo from '../assets/images/logo-devlinks-small.svg'
import test from "../assets/images/illustration-empty.svg"

function Preview({active}){
    return (
        <>
            <div className="pvw-hd brd-rds">
                <button className="edit" onClick={active}>Back to Editor</button>
                <button className="sharing">Share Link</button>
            </div>
            <div className="prv-container brd-rds">
            <div className="prv-data brd-rds">
                <img src={test} alt="dd"/>
                <h1>Name</h1>
                <p>info</p>
            </div>
            </div>
            <div className="logo-area  brd-rds">
                <div className='logo brd-rds'>
                    <img src={logo} alt="logo" />
                    <h1>devlinks</h1>
                </div>
            </div>
        </>
    )
}

export default Preview