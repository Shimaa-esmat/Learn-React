import Header from "../components/Header.jsx"
import Links from "../components/Links.jsx"
import AddLink from "../components/AddLink.jsx"
import IllustrationPhone from "../components/IllustrationPhone.jsx"
import ProfileDetails from "../components/ProfileDetails.jsx"

function EditingData(){
    return (
        <>
        <Header/>
        <IllustrationPhone/>
        <Links>
            <AddLink/>
        </Links>
        <ProfileDetails />
        </>
    )
}

export default EditingData