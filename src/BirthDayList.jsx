const BirthDayList = ({data})=>{
    return (
        data.map(({name , age , id , image}) =>{
            console.log("This is the information " , name);
            return (
                <article key = {id} className = "Person">
                    <img src = {image} alt = {`${name}` }/>
                    <div> 
                        <h2>{name}</h2>
                        <p>{`${age}  Years Old ! `}</p>
                    </div>
                </article>
            )
        })
    )
}
export default BirthDayList;
