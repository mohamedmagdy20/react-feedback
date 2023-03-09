import React from 'react'
import propTypes from 'prop-types'
function Card({children,reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse' }`}>
//         {children}
//     </div>
//   )
    return (
        <div className='card' style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)':'#fff',color:reverse ? '#fff':'#000' }}>
            {children}
        </div>
    )
}
Card.defaultProp ={
    reverse:false
}
Card.propType = {
    children: propTypes.node.isRequired
}
export default Card
