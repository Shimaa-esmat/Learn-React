import Header from "../components/Header.jsx"
import Links from "../components/Links.jsx"
import AddLink from "../components/AddLink.jsx"
import initProfile from '../assets/images/icon-frontend-mentor-gray.svg'
import IllustrationPhone from "../components/IllustrationPhone.jsx"
import ProfileDetails from "../components/ProfileDetails.jsx"
import LinkIcon from "../components/LinkIcon.jsx"
import { useState, useRef } from "react"

function EditingData({active}){
    const [toggleComp,setToggleComp] = useState(false)
    const [addLink , setLink] = useState([]);
    function handleAddClick(){
        // const html = <AddLink key={addLink} number={0} removeClick={() => {handleRemoveClick(addLink.length)}}/>
        setLink([...addLink, <AddLink key={addLink} number={0} removeClick={() => {handleRemoveClick(addLink.length)}} handleSelect={(option)=>{
            setSelectValue(option)
        }} />])
    }
    

    const[selectValue, setSelectValue] = useState(null)
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

    const [profile, setProfile] = useState({
        profilePicture: initProfile ,
        firstName: '',
        lastName: '',
        email: ''
    
    });

        function handleProfile(e){
            // console.log(e.target.type)
            console.log(e.target.name)

            if(e.target.type === 'file'){
                console.log(e.target.type)
                const newPicture = URL.createObjectURL(e.target.files[0]);
                setProfile(prevProfile => ({
                    ...prevProfile,
                    profilePicture: newPicture,
                }));
            }
            if(e.target.name === 'firstName'){
                setProfile(prevProfile => ({
                    ...prevProfile,
                    firstName: e.target.value,
                }));
            }
            if(e.target.name === 'lastName'){
                setProfile(prevProfile => ({
                    ...prevProfile,
                    lastName: e.target.value,
                }));
            }
            if(e.target.name === 'email'){
                setProfile(prevProfile => ({
                    ...prevProfile,
                    email: e.target.value,
                }));
            }
        }

        // function handleSelect(){

        // }
    


    // const linkNunber = addLink.length
    console.log(profile)
    

    return (
        <>
        <Header  
        activePage={active}
        activeProfileDetialsClick={()=>{setToggleComp(true);}}
        activeLinkClick={()=>{setToggleComp(false);
        }}/>
        
        <LinkIcon />
        
        <IllustrationPhone 
            image={profile.profilePicture}
            firstName={profile.firstName}
            lastName={profile.lastName}
            email={profile.email}
        />
        {(toggleComp ?
            <ProfileDetails handleProfile={handleProfile}/> 
            :<Links addClick={handleAddClick} addLink={addLink}  />)}

        </>
    )
}



export default EditingData