import React from "react";


function Presentacional(props) {
    console.log(props)
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols6 gap-8">

        {props.data.length == 0 
        ? <p>Cargando...</p> 
        : props.data.map((item, i)=>{
            console.log(item, i)
            return (
                <article key={i} className="card shadow-md p-4 rounded-md duration-300 transition hover:scale-110">
                    <h2 className="h-28 text-center">{item.title} - ${item.price}</h2>
                    <img src={item.image} alt={item.image} />
                </article>
            )
        })}   
    
    </section>
  )
}

export default Presentacional

