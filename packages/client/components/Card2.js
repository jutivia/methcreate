import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import {cardData2} from "./data/CardData" 
 
const Card2 = () => { 
  return ( 
    
        <div className='flex mx-2 w-[100%] justify-between '> 
             
            {cardData2?.map((items) => ( 
              
                <div key={items} className="relative flex min-h-screen flex-col justify-center">
             
                  <div className="mx-auto flex w-96 flex-col justify-center ">
                  
                    <Image className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={items.StreamImg} />
                 
                    <div className="p-4 flex  justify-between ">
                      <div className="text-blue-400 text-xs  ">
                       <Image src={items.ProfileImg} alt="profile" width={66} height={85}/>
                      
                      </div>
                      <div className="w-96 ml-4">
                      <h1 className="text-2xl  text-light  font-inter">{items.Title}</h1>
                      </div>
                      <BsThreeDotsVertical size={15} />
                      
                    </div>
                    <div>
                        <h3 className="text-[ #D4D4D4] mx-20">{items.Name}</h3>
                    </div>
                    <div className=" w-[100%] flex">
                        <h3 className="text-[ #D4D4D4] mx-20  mt-2">{items.Viewers} </h3>
                        <h3 className="text-[ #D4D4D4] mx-[-70px] md:w-fit  flex  py-1 mt-1">{items.Text}</h3>
 
                       
                    </div>
                    <p className="mx-20 text-[#A3A3A3] text-[11px]">{items.Description}</p>
                    
                  </div>
                </div>
            ))} 
        </div> 
    
  ) 
} 
 
export default Card2
