import React from 'react'

function List() {
    const fruits =["Apple", "Banana","Orange", "Lemon", "Pine Apple", "Mango"];
  return (
    <div className='container mt-3'>
        {fruits.map((fruit)=>{
            return <h4 key={fruit}>{fruit}</h4>
        })}
      
    </div>
  )
}

export default List
