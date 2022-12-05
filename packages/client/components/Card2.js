import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import {cardData2} from "./data/CardData" 
 import {RiArrowDropDownLine} from "react-icons/ri"
import Link from "next/link";
const Card2 = () => { 
  return ( 
    <>
    <div class="flex items-center mt-2 py-4">
       
    <div class="flex-grow h-px bg-gray-600"></div> 


    <span class="flex-shrink text-2xl text-gray-200 px-4  font-light">show more</span>
    <RiArrowDropDownLine size={32} className="mr-4"/>


    <div class="flex-grow h-px bg-gray-600"></div>
</div>
<div>
    <p className="text-[18px] font-[600] ml-8 text-[#F5F5F5] mt-6 ">Today</p>
    <div className='flex mt-4 gap-5 flex-wrap justify-between w-[95%] mx-auto '> 

        {cardData2?.map((items) => ( 
          
        <div key={items} className="relative pb-6    flex w-[354px]  flex-col justify-center">
            <div className="relative">
            <Link href={`play/${items.id}`}>
                <Image className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={items.StreamImg} />
            </Link>
            </div>
         
              <div className="mx-auto  flex w-full flex-col justify-center ">
              
                
                <div className="p-4 flex  justify-between ">
                  <div className="text-blue-400 text-xs  ">
                   <Image src={items.ProfileImg} alt="profile" width={66} height={85}/>
                  
                  </div>
                  <div className="w-96 ml-2">
                  <h1 className="text-[16px] font-[500] text-light  font-inter">{items.Title}</h1>
                  </div>
                  <BsThreeDotsVertical  size={25} />
                  
                </div>
                <div>
                    <h3 className="text-[#D4D4D4] ml-16">{items.Name}</h3>
                </div>
                <div className=" w-fit mt-2  gap-3 ml-auto mr-32 flex">
                    <h3 className="text-[ #D4D4D4] text-[12px]    ">{items.Viewers} </h3>
                    <h3 className="text-[ #D4D4D4]  text-[10px]   ">{items.Text}</h3>
                    
                   
                </div>
               
                
              </div>
            </div>
        ))} 
       
    </div>
    

    </div>
    </>
    
  ) 
} 
 
export default Card2
