import Header from "../components/Header.jsx"
import Links from "../components/Links.jsx"
import AddLink from "../components/AddLink.jsx"
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

    const [profile,setProfile] = useState()
    // function handleProfile(e){
    //     setProfile(URL.createObjectURL(e.target.files[0]))
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
        <IllustrationPhone image={profile}/>
        {(toggleComp ?
            <ProfileDetails handleProfile={(e)=>{setProfile(URL.createObjectURL(e.target.files[0]))}}/> 
            :<Links addClick={handleAddClick} addLink={addLink} />)}
        {/* <Links addClick={handleAddClick} addLink={addLink} /> */}
        {/* <ProfileDetails /> */}
        </>
    )
}



export default EditingData