import React from 'react'



const socialicons = (props) => {
console.log(props.name)
if(!props.url && !props.name){
    console.log(props.url)
    console.log(props.name)
    return 
}


  return (
    <div className='  border-zinc-400 shadow-[0_8px_20px_rgba(0,0,0,0.24)] hover:shadow-[0_6px_35px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-200  rounded-full h-13 w-13'>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={props.pic} alt={props.name} />
            </a>

            
    </div>
  )
}

export default socialicons
