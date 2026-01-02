"use client";

import { categoryIconMap } from "./category-icon-map";




const BoxCateGory = ({categories}) => {
    console.log(categories);
    return(
        <>
            {
                categories.map((item) => {
                    const Icon = categoryIconMap[item.icon_key];
                    return( 
                        <button 
                            className="cate-btn flex flex-col justify-center items-center gap-[12px] group
                            w-[234px] h-[243px] border-[2px] border-[#EAEAEA] rounded-[20px]
                            transform transition-transform duration-300 ease-in-out cursor-pointer
                            hover:shadow-2xl hover:translate-y-[-10px]"
                            key={item.id}
                        >
                            {
                                Icon && 
                                    <Icon 
                                        size={24} 
                                        className="
                                            w-[50px] h-[50px] text-[#FF782D] transform duration-300 
                                            ease-in-out group-hover:scale-110
                                        " 
                                    />
                            }
                            <h4 className="text-[20px] font-semibold text-[#000000] group-hover:text-[#FF782D] text-center">{item.cate_name}</h4>
                            <p className="text-[18px] text-[#555555]">{item.quantity} Courses</p>
                        </button> 
                    )
                })
            }
        </>
    );
}

export default BoxCateGory;