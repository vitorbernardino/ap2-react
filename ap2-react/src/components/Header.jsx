export function Header({name}) {

    return(
        <header style={{
            textAlign: 'center',
            background:'#1F2124',
            padding:'10px',
            color:'white'}} >
            <h1>Bem-vindo, {name}!</h1>
        </header>
    )

}
