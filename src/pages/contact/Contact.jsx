import React from 'react'
import img from "../../assets/our.png"

const arr = [
    {
        adress:"Address way",
        text:"1800 Abbot Kinney Blvd. Unit D & E Venice",
        contact:"Contact info",
        mobile:"obile: (+88) - 1990 - 6886 ",
        email:"Mail: contact@eduma.com",
        work:"Work timer",
        time1:"Monday - Friday: 09:00 - 20:00 ",
        time2:"Sunday & Saturday: 10:30 - 22:0"
    }
]

const Contact = () => {
  return (
    <div className='container mx-auto my-[5rem]'>
        <div>
            <h2 className='text-5xl font-serif font-bold mb-5'>Contact</h2>
             {arr.length > 0 ?
              <div className='grid grid-cols-3 gap-5'>
                {arr.map((elem,id)=>{
                    return(
                        <>
                         <div className='border-2 text-center shadow-md hover:border-b-2 hover:border-b-red-500 cursor-pointer'>
                             <div className='w-[80px] h-[80px] mx-auto py-2'>
                             <img src={img} w-full h-full alt="" />
                             </div>
                            <h4 className='text-3xl font-bold font-serif pb-3'>{elem.adress}</h4>
                            <p className='text-lg font-serif pb-10'>{elem.text}</p>
                         </div>

                          <div className='border-2 text-center shadow-md hover:border-b-2 hover:border-b-blue-500 cursor-pointer'>
                          <div className='w-[80px] h-[80px] mx-auto py-2'>
                             <img src={img} w-full h-full alt="" />
                             </div>
                          <h4 className='text-3xl font-bold font-serif pb-3'>{elem.contact}</h4>
                            <p className='text-lg font-serif '>{elem.mobile}</p>
                            <p className='text-lg font-serif pb-10'>{elem.email}</p>
                          </div>

                          <div className='border-2 text-center shadow-md hover:border-b-2 hover:border-b-green-500 cursor-pointer'>
                          <div className='w-[80px] h-[80px] mx-auto py-2'>
                             <img src={img} w-full h-full alt="" />
                             </div>
                          <h4 className='text-3xl font-bold font-serif pb-3'>{elem.work}</h4>
                            <p className='text-lg font-serif '>{elem.time1}</p>
                            <p className='text-lg font-serif pb-10'>{elem.time2}</p>
                          </div>
                        </>
                    )
                })}
              </div> : null}

               <div className='w-[600px] mx-auto mt-[5rem]'>
                <h2 className='text-3xl font-serif text-center mb-5'>
                Fill the form below so we can get to know you and your needs better.
                </h2>

                <form action="">
                     <div>
                     <input type="text" className='bg-gray-300 pl-3 rounded w-full my-3 py-2 border-none outline-none' placeholder='Name*' />
                     </div>
                     <div>
                     <input type="email" className='bg-gray-300 pl-3 rounded w-full my-3 py-2 border-none outline-none'  placeholder='Email*' />
                     </div>
                    <textarea name="" id="" cols="30" rows="10" className='bg-gray-300 pl-3 rounded w-full my-3 py-2 border-none outline-none' placeholder='Message*'></textarea>

                     <div className='flex justify-center items-center'>
                     <button className='border-none outline-none bg-yellow-500 py-2 px-5 text-lg uppercase font-serif font-bold rounded'>Submit now</button>
                     </div>
                </form>
               </div>
        </div>
    </div>
  )
}

export default Contact