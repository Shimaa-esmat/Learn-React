function Links({addClick, addLink}) {
    return (
        <div className="link-area brd-rds">
        <div className="link-added">

            <h1>
                Customize your links
            </h1>
            <p>Add/remove/edit links below and then share all Your profiles with the world!</p>
            <button className="add-link btn-cnter" onClick={addClick}>
                + Add new link
            </button>
            </div>
            <>
                {addLink}
            </>
        </div>
    )
}


export default Links