// import logo from '../assets/images/logo-devlinks-large.svg'
import logo from '../assets/images/logo-devlinks-small.svg'
import linkLogo from '../assets/images/icon-links-header.svg'
import profileLogo from '../assets/images/icon-profile-details-header.svg'
// import preview from '../assets/images/icon-preview-header.svg'

export default function Header({activeLinkClick , activeProfileDetialsClick, activePage}){
    return (
        <header className='edit-page brd-rds'>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>devlinks</h1>
        </div>
            <div className='pages'>
                <button className='header-link btn-center' onClick={activeLinkClick}> <img src={linkLogo} alt='' /> links </button>
                <button className='header-profile btn-center' onClick={activeProfileDetialsClick}> <img src={profileLogo} alt='' /> profile details </button>
            </div>
            <button className='preview btn-center' onClick={activePage}>
            preview 
            </button>
        </header>
    )
}