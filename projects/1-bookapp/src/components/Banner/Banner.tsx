import bannerImage_1 from "../../assets/images/banner-1.jpg"
import bannerImage_2 from "../../assets/images/banner-2.jpeg"
const Banner = () => {
    return (
        <div className="w-full py-3">
            <div className="flex gap-4 p-2 justify-center items-center">

                <div className="overflow-hidden rounded-xl">
                    <img
                        src={bannerImage_1}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        alt="banner-1"
                    />
                </div>

                <div className="overflow-hidden rounded-xl">
                    <img
                        src={bannerImage_2}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        alt="banner-2"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
