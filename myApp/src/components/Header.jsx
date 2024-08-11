// import logo from '../assets/images/logo-devlinks-large.svg'
import logo from '../assets/images/logo-devlinks-small.svg'
import linkLogo from '../assets/images/icon-links-header.svg'
import profileLogo from '../assets/images/icon-profile-details-header.svg'
// import preview from '../assets/images/icon-preview-header.svg'

export default function Header(){
    return (
        <header className='edit-page'>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>devlinks</h1>
        </div>
            <div className='pages'>
                <button className='header-link'> <img src={linkLogo} alt='' /> links </button>
                <button className='header-profile'> <img src={profileLogo} alt='' /> profile details </button>
            </div>
            <button className='preview'>
            preview 
            </button>
        </header>
    )
}