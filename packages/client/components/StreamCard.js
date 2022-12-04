import Image from "next/image";

import {cardData} from "./data/CardData" 
 
const StreamCards = () => { 
  return ( 
    
        <div className='flex mx-14 justify-between '> 
             
            {cardData?.map((items) => ( 
              
                <div key={items} className="relative flex min-h-screen flex-col justify-center">
             <div className="flex gap-2 items-center  absolute  z-10 py-[5px] px-3 rounded-2xl overflow-hidden top-[330px] right-2">
                <Image src={items.StatusImg} alt="status" width={63} height={25} />
                  <div className="bg-[#000000] opacity-40 -z-10 absolute inset-0"></div>
                </div>
                  <div className="mx-auto flex w-96 flex-col justify-center ">
                  
                    <Image className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={items.StreamImg} />
                 
                    <div className="p-4 flex  justify-between ">
                      <div className="text-blue-400 text-xs  ">
                       <Image src={items.ProfileImg} alt="profile" width={66} height={85}/>
                      
                      </div>
                      <div className="w-96 ml-4">
                      <h1 className="text-2xl  text-light  font-inter">{items.Title}</h1>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
            ))} 
        </div> 
    
  ) 
} 
 
export default StreamCards
