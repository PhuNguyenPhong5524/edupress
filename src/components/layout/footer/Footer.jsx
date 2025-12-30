const Footer = () => {
    return (
        <footer className="showFooter bg-[#F5F5F5]">      
            <div>
                <div 
                    className="
                        max-w-[1290px] mx-auto flex justify-between w-full
                        h-auto py-[40px] gap-[150px] 
                    "
                >
                    <div className="w-[30%]">
                        <a href="/" className="flex items-center gap-1 ">
                            <img src="./images/logo.png" alt="EduPress Logo" className="w-[40px] h-[30px]" />
                            <p className=" font-bold text-[28px]">EduPress</p>
                        </a>
                        <p className="mt-[20px] font-regular text-[16px] text-[#555555] text-justify">
                            EduPress kết nối học viên với chuyên gia uy tín, cung cấp các khóa học chất lượng cao về công nghệ, 
                            kỹ năng mềm và phát triển nghề nghiệp. Học mọi lúc, mọi nơi để sẵn sàng cho tương lai.
                        </p>
                    </div>
                    <div className="w-[70%] flex justify-between">
                        <div className="w-full">
                            <h3 className="text-[#000000] font-semibold text-[20px] pt-[5px] mb-[20px]">Hỗ trợ</h3>
                            <ul className="leading-[40px]">
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Liên hệ</li>
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Hỏi đáp thường gặp (FAQ)</li>
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Chính sách & Điều khoản</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h3 className="text-[#000000] font-semibold text-[20px] pt-[5px] mb-[20px]">Chương trình học</h3>
                            <ul className="leading-[40px]">
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Phát triển Web</li>
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Khoa học Dữ liệu</li>
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Ứng dụng Di động</li>
                                <li 
                                    className="
                                        text-[#555555] text-[16px] font-regular transform
                                        transition-all duration-300 ease-in-out hover:text-[#FF782D] cursor-pointer
                                        hover:pl-[10px] hover:underline
                                    "
                                >Tất cả chương trình</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h3 className="text-[#000000] font-semibold text-[20px] pt-[5px] mb-[20px]">Liên hệ</h3>
                            <div className="leading-[30px]">
                                <p className="text-[#555555] font-regular text-[16px]">Địa chỉ: 1235 Đường mới, Quận Bình Tân, TP. Hồ Chí Minh</p>
                                <p className="text-[#555555] font-regular text-[16px]">Điện thoại: (0123) 456-789 </p>
                                <p className="text-[#555555] font-regular text-[16px]">Email: hotro@edupress.vn</p>
                            </div>
                            <div className="flex gap-[10px] items-center mt-[20px]">
                                <i className="
                                    fa-brands fa-facebook text-[#555555] text-[20px] cursor-pointer
                                    transform transition-all ease-in-out duration-300 hover:text-[#FF782D]
                                "></i>
                                <i className="
                                    fa-brands fa-instagram text-[#555555] text-[20px] cursor-pointer
                                    transform transition-all ease-in-out duration-300 hover:text-[#FF782D]
                                "></i>
                                <i className="
                                    fa-brands fa-youtube text-[#555555] text-[20px] cursor-pointer
                                    transform transition-all ease-in-out duration-300 hover:text-[#FF782D]
                                "></i>
                                <i className="
                                    fa-brands fa-pinterest text-[#555555] text-[20px] cursor-pointer
                                    transform transition-all ease-in-out duration-300 hover:text-[#FF782D]
                                "></i>
                                <i className="
                                    fa-brands fa-twitter text-[#555555] text-[20px] cursor-pointer
                                    transform transition-all ease-in-out duration-300 hover:text-[#FF782D]
                                "></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1290px] mx-auto">
                    <hr className="w-full h-[1px] bg-[#555555] opacity-10 "/>
                    <p className="text-[16px] font-regular text-[#555555] text-center py-[10px]">© 2025 EduPress | Nền tảng học trực tuyến cho thế hệ chuyên nghiệp</p>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;