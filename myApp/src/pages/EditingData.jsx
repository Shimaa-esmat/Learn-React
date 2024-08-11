import Header from "../components/Header.jsx"
import Links from "../components/Links.jsx"
import AddLink from "../components/AddLink.jsx"
import IllustrationPhone from "../components/IllustrationPhone.jsx"
import ProfileDetails from "../components/ProfileDetails.jsx"
import { useState } from "react"
function EditingData(){
    const [addLink , setLink] = useState([]);
    function handelAddClick(){
        setLink([...addLink, <AddLink key={addLink.length} />])
    }
    return (
        <>
        <Header/>
        <IllustrationPhone/>
        <Links click={handelAddClick} addLink={addLink} >
            {/* <AddLink/> */}
        </Links>
        <ProfileDetails />
        </>
    )
}

export default EditingData