import React from 'react'
const arr =[
  {
    title:"Mumtoz",
    text2:"+992200553333",
    text3:"5th Evenue New York apartment 5",
    text4:"sbachtovar@gmail.com",
    text5:"social icons"
  },
  {
    title: "company",
    text2:"text2",
    text3:"text3",
    text4:"text4",
    text5:"text5"
  },
  {
    title: "Links",
    text2:"text2",
    text3:"text3",
    text4:"text4",
    text5:"text5"
  },
  {
    title: "Support",
    text2:"text2",
    text3:"text3",
    text4:"text4",
    text5:"text5"
  },
  {
    title: "Recommend",
    text2:"text2",
    text3:"text3",
    text4:"text4",
    text5:"text5"
  }
]
const Footer = () => {
  return (
    <div className="bg-black/50">
<div className='container mx-auto'>
     {arr.length > 0 ? 
     <div className='grid grid-cols-5'>
      {arr.map((elem,id)=>{
        return(
          
            <div>
              <h3 className='text-3xl font-serif py-5 font-bold text-white'>{elem.title}</h3>
               <p className='text-lg font-serif'>{elem.text2}</p>
               <p className='text-lg font-serif'>{elem.text3}</p>
               <p className='text-lg font-serif'>{elem.text4}</p>
               <p className='text-lg font-serif'>{elem.text5}</p>
            </div>
          
        )
      })}
     </div>: null}
    </div>
    </div>
    
  )
}

export default Footer