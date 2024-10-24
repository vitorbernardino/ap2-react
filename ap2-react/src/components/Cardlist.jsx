import Card from './Card';

export function Cardlist({users}) {

    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

    return(
        <div style={{ background:'#383A3F', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {sortedUsers.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    )

}
