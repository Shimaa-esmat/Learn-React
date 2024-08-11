function Links({children}) {
    return (
        <div className="link-area">
            <h1>
                Customize your links
            </h1>
            <p>Add/remove/edit links below and then share all Your profiles with the world!</p>
            <button>
                + Add new link
            </button>
            <div className="links">
                {children}
            </div>
        </div>
    )
}


export default Links