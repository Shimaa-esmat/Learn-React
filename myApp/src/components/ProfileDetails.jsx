// import { useState } from "react"
// import 
export default function ProfileDetails({handleProfile}){

    return (
        <>
            <form action="" className="profile-data brd-rds"> 
                <div className="picture link-add">
                <p>Profile picture</p>
                <input type="file" name={"test"} onChange={handleProfile}  accept="image/*" id="myFile" name="filename"/>
                {/* <img src={profile} alt=" "/> */}
                <p>Image must be below 1024x1024px.<br/> Use PNG,JPG, or BMP</p>
                </div>
                <div className="data-field">
                <div className="input-field">
                    <label htmlFor="firest-name"> First name * </label>
                    <input type="text"  id="first-name" name="firstName" placeholder="Enter your first name" className='input-platform' onChange={handleProfile}/>
                </div>
                <div className="input-field">
                    <label htmlFor="last-name" >Last name *</label>
                    <input type="text" id="last-name" name={'lastName'} placeholder="Enter your last name" className='input-platform' onChange={handleProfile}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email"id="email" name={'email'}  placeholder="Enter email" className='input-platform' onChange={handleProfile}/>
                </div>
                </div>
            </form>
        </>
    )
}