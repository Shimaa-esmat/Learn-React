export default function Header({path, headLine}){
    return (
    <header className="header">
        <img className="header image" src={path} alt= {headLine}/>
        <h1>{headLine}</h1>
      </header>
    )

}