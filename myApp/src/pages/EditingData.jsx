import Header from "../components/Header.jsx"
import Links from "../components/Links.jsx"
import AddLink from "../components/AddLink.jsx"
import initProfile from '../assets/images/icon-frontend-mentor-gray.svg'
import IllustrationPhone from "../components/IllustrationPhone.jsx"
import ProfileDetails from "../components/ProfileDetails.jsx"
import { useState, useRef } from "react"

function EditingData({active}){
    const [toggleComp,setToggleComp] = useState(false)
    const [addLink , setLink] = useState([]);
    function handleAddClick(){
        // const html = <AddLink key={addLink} number={0} removeClick={() => {handleRemoveClick(addLink.length)}}/>
        setLink([...addLink, <AddLink key={addLink} number={0} removeClick={() => {handleRemoveClick(addLink.length)}}/>])
    }
    const remove = useRef(0)
    function handleRemoveClick(index){

        remove.current = addLink.length
        console.log(index)
        console.log(addLink)
        console.log(addLink[0])

    }

    function handleProfileDetailsClick({}){
        setToggleComp(true);
    }

    const [profile, setProfile] = useState([{
        profilePicture: initProfile,
        firstName: 'name',
        lastName: 'name',
    }]);

    function handleProfilePicture(e) {
        const newPicture = URL.createObjectURL(e.target.files[0]);
        setProfile(prevProfile => [
            {
                ...prevProfile[0],
                profilePicture: newPicture,
            }
        ]);
    }

    // const linkNunber = addLink.length
    console.log(profile)
    

    return (
        <>
        <Header  
        activePage={active}
        activeProfileDetialsClick={()=>{setToggleComp(true);}}
        activeLinkClick={()=>{setToggleComp(false);
        }}/>
        <IllustrationPhone image={profile[0].profilePicture}/>
        {(toggleComp ?
            <ProfileDetails handleProfile={(e) => handleProfilePicture(e)}/> 
            :<Links addClick={handleAddClick} addLink={addLink} />)}

        </>
    )
}



export default EditingData