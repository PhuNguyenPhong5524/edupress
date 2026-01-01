import Banner from './Banner';
import BoxShowCategory from './BoxShowCategory/BoxShowCategory';
import './Home.css';

const categories =  [
    {
      "id": 1,
      "cate_name": "Phát triển web",
      "icon_key": "web",
      "quantity": 10
    },
    {
      "id": 2,
      "cate_name": "Khoa học dữ liệu",
      "icon_key": "data",
      "quantity": 4
    },
    {
      "id": 3,
      "cate_name": "Ứng dụng di động",
      "icon_key": "mobile",
      "quantity": 4
    },
    {
      "id": 4,
      "cate_name": "Ngôn ngữ lập trình",
      "icon_key": "language",
      "quantity": 6
    },
    {
      "id": 5,
      "cate_name": "Phát triển trò chơi",
      "icon_key": "game",
      "quantity": 9
    },
    {
      "id": 6,
      "cate_name": "Thiết kế & cơ sở dữ liệu",
      "icon_key": "designdata",
      "quantity": 5
    },
    {
      "id": 7,
      "cate_name": "Kiểm tra phần mềm",
      "icon_key": "softwaretest",
      "quantity": 9
    },
    {
      "id": 8,
      "cate_name": "Kỹ thuật mềm",
      "icon_key": "softwarearchitecture",
      "quantity": 3
    }
]


const HomePage = () => {
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