

export default function ProfileDetails(){
    return (
        <>
            <form action="">
                <div className="picture">
                <input type="file" id="myFile" name="filename"/>
                </div>
                <div className="info">
                    <label htmlFor="firest-name"> First name* </label>
                    <input type="text" id="first-name" placeholder="Enter your first name"/>
                    <label htmlFor="last-name" >Last name*</label>
                    <input type="text" id="last-name" placeholder="Enter your last name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email"id="email" placeholder="Enter email"/>
                </div>
            </form>
        </>
    )
}