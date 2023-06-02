
const Profile = () => {
    const user = {
        name: "Kit",
        img: "https://mobimg.b-cdn.net/v3/fetch/92/92c64ec84ed9b114bf59508cf80b6254.jpeg",
    }
    return (
        <div>
             <strong> {user.name} </strong>
             <img src={user.img}
             style = {{maxWidth: "200px", display: "block"}}
             />
        </div>
    )
}

export default Profile