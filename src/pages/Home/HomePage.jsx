'use client';

import Banner from '../../components/Home/Banner';
import BoxShowCategory from '../../components//Home/BoxShowCategory/BoxShowCategory';
import useFetchData from '../../api/useFetchData'



const HomePage = () => {
    
    const {data: categories} = useFetchData('categories');

    return (
        <div>
            {/* <!-- Banner --> */}
                <Banner />
            {/* Main */}
                <div className="max-w-[1290px] mx-auto relative">
                    {/* <!-- Section danh mục--> */}
                        <BoxShowCategory  categories={categories} />
                </div>
        </div>
    )
}

export default HomePage;