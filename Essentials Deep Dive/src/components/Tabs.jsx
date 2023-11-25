export default function Tabs({ button, children, ButtonContainer='menu'}) {
 
    return <>
        <ButtonContainer>
            {button}
        </ButtonContainer>
        {children}
    </>
}