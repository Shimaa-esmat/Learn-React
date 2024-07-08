export default function Tabs({children, buttons,ButtonContainer = 'menu' }){
    return (
    <>
        <ButtonContainer>
            {buttons}
            {/* {props} */}
        </ButtonContainer>
        {children}
    </>
    )
}