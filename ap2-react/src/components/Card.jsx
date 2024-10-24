
function Card({ user }) {

    return(
        <div style={{background:'#1F2124', borderRadius: '5px',
            margin: '50px 20px 20px 20px',
            padding: '20px',
            textAlign: 'center',
            color: '#F6B352',
            float: 'left', border: '1px solid gray'}}>
            <img src={user.imageUrl} style={{ width: '100px', height: '100px', borderRadius:'100px'}} />
            <h3>{user.name}</h3>
            <p>
            {user.confirmed ? "Egresso/Convidado" : "Estudante"}
            </p>

            <p>
            {user.payed ? "Presença Confirmada" : "Presença Não Confirmada"}
            </p>
        </div>
    )

}

export default Card