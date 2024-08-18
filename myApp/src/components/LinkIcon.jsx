export default function LinkIcon({icon, label, LinkIcon}){
return (
        <>
                <link href={LinkIcon} />
                <img src={icon} alt={label}/>
                <p className="label">{label}</p> 
        </>
)


}

