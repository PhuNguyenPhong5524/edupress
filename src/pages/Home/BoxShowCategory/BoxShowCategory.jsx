import BoxCateGory from "./BoxCategory";


const BoxShowCategory = ({categories}) => {
    return (
        <div>
            {/* <!-- Title --> */}
                <div className="py-[50px] flex justify-between items-center">
                        <div className="flex flex-col leading-[30px] border-l-4 border-[#FF782D] pl-4">
                            <h2 className="text-[28px] font-semibold text-[#000000]">Danh mục khóa học</h2>
                            <p className="text-[16px] font-regular text-[#555555]">Khám phá tất cả danh mục của chúng tôi</p>
                        </div>
                    {/* <!-- Button --> */}
                        <button 
                            className="
                                border-[1px] border-[#9D9D9D] rounded-[24px] w-[150px] h-[45px] group
                                transform transition-transform duration-300 ease-in-out
                                hover:shadow-md hover:scale-110
                            "
                        >
                            <a className="text-[16px] font-medium text-[#000000] group-hover:text-[#FF782D]" href="#"> Xem tất cả </a>
                        </button>
                </div>
            {/* <!-- Box Category --> */}
                <div id="showCate" className="flex flex-wrap gap-[30px] relative">
                    {/* <!-- Box --> */}
                        <BoxCateGory categories={categories} />
                </div>
        </div>
    )
}

export default BoxShowCategory;