import AddLink from "../components/Link"

export default function Links(){
    return (
        <>
            <h1>
                Customize your links
            </h1>
            <p>Add/remove/edit links below and then share all Your profiles with the world!</p>
            <button>
                + Add new link
            </button>
            <div className="links">
            <AddLink/>
            
            </div>
        </>
    )
}