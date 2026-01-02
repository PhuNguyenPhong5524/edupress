'use client';
import fetchApi from '../../api/fetchApi';
import Banner from './Banner';
import BoxShowCategory from './BoxShowCategory/BoxShowCategory';
import './Home.css';
import { useState, useEffect } from 'react';




const HomePage = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      let mounted = true;

      fetchApi('categories')
        .then((cats) => {
          if (mounted) setCategories(cats);
        })
        .catch((err) => {
          console.error('Fetch categories failed:', err);
        });

      return () => { mounted = false };
    }, []);


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