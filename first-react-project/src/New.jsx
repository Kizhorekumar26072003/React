import React from 'react'
//b4 understanding the concept , first tyr to understand the problem it solves.(first thinking learning)
//props will always received as objects
function New({name,age,phone,email}) {
    
  return (
    <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h4>{phone}</h4>
        <h5>{email}</h5>
    </div>

  )
}

export default New 