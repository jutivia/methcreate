import { cardData } from "./data/CardData";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const StreamCards = () => {
  return (
    <>
      <div>
        <p className="text-[18px] font-[600] ml-8 text-[#F5F5F5] mt-6 ">
          Live streams
        </p>
        <div className="flex mt-4  flex-wrap justify-between w-[95%] mx-auto ">
          {cardData?.map((items) => (
            <div
              key={items}
              className="relative pb-6    flex w-[354px]  flex-col justify-center"
            >
              <div className="relative">
                <Image
                  src={items.StatusImg}
                  alt="status"
                  width={63}
                  height={25}
                  className="absolute bottom-[3%] right-[4%]"
                />
                <Link href={`play/${items.id}`}>
                  <Image
                    className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                    src={items.StreamImg}
                  />
                </Link>
              </div>

              <div className="mx-auto  flex w-full flex-col justify-center ">
                <div className="p-4 flex  justify-between ">
                  <div className="text-blue-400 text-xs  ">
                    <Image
                      src={items.ProfileImg}
                      alt="profile"
                      width={66}
                      height={85}
                    />
                  </div>
                  <div className="w-96 ml-2">
                    <h1 className="text-[16px] font-[500] text-light  font-inter">
                      {items.Title}
                    </h1>
                  </div>
                  <BsThreeDotsVertical size={25} />
                </div>
                <div>
                  <h3 className="text-[#D4D4D4] ml-16">{items.Name}</h3>
                </div>
                <div className=" w-fit mt-2  gap-3 ml-auto mr-9 flex">
                  <h3 className="text-[ #D4D4D4] text-[12px]    ">
                    {items.Viewers}{" "}
                  </h3>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StreamCards;
