const Home1=(x)=>{
    console.log(x)
    return(
        <div>
            <h1>{x.data.users[0].name}</h1>
            <h1>{x.data.users[1].name}</h1>
            <h1>{x.data.users[2].name}</h1>
        </div>
    )
}
export default Home1