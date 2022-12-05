import { exploreData } from "./data/CardData";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const ExploreCard = () => {
  return (
    <div>
      <p className="text-[18px] font-[600] text-[#F5F5F5] ml-8 mt-6 ">Trending</p>
      <div className="flex mt-4  flex-col justify-between mx-auto w-[97%] ">
        {exploreData?.map((items) => (
          <div
            key={items}
            className="relative pb-6 flex   flex-col justify-center"
          >
            <div className=" flex gap-5 relative py-1 px-2 text-[10px]  ">
              <Image
                src={items.StatusImg}
                alt="status"
                width={83}
                height={35}
                className="absolute bottom-[5%] left-[240px]"
              />
              <Link href={`play/${items.id}`}>
              <Image
                className="aspect-video w-[428px] rounded-[8px] object-cover object-center"
                src={items.StreamImg}
              />
<<<<<<< HEAD
              <div >
=======
              </Link>
              <div className="mt-4">

>>>>>>> d30eba272e37c8bb29c19cb08e4e424bb42cb264
                <h1 className="text-[16px] font-[500] text-light  font-inter">
                  {items.Title}
                </h1>

                <div className=" w-fit mt-2  gap-3  mr-9 flex">
                  <h3 className="text-[#D4D4D4] mt-2 ">{items.Name}</h3>
                  <h3 className="text-[ #D4D4D4] mt-1 text-[11px]  py-1 px-2  ">
                    {items.Name1}
                  </h3>
                  <h3 className="text-[ #D4D4D4]  mt-1  py-1 px-2 text-[11px]  ">
                    {items.Name2}
                  </h3>
                </div>
                <div className=" w-fit mt-2  gap-3   flex">
                  <h3 className="text-[ #D4D4D4]  text-[10px]  py-1 px-2 bg-[#262626]    rounded-[14px] ">
                    {items.Text}
                  </h3>
                  <h3 className="text-[ #D4D4D4]   bg-[#262626] py-1 px-2 text-[10px]  rounded-[14px] ">
                    {items.RichText}
                  </h3>
                  <h3 className="text-[ #D4D4D4]    bg-[#262626] text-[10px] py-1 px-2  rounded-[14px] ">
                    {items.LowText}
                  </h3>
                </div>
                <div>
                  <p className="font-[11px] text-[#A3A3A3] mt-8">
                    {items.Description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCard;
