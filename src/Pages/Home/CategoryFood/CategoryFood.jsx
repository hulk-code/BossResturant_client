import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import Sectiontitle from '../Shared/SectionTitle/Sectiontitle';

const CategoryFood = () => {
    return (
       <section>
        <Sectiontitle 
         subHeading={'oder online'}
        heading= {'From 11:00am to 10:00pm'}>
       
        </Sectiontitle>


         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10 mt-10"
      >
        <SwiperSlide><img src={img1} alt="" />
        <p className= 'shadow-2xl text-4xl text-slate-600 -mt-11 lg:mr-24  text-center uppercase'>salad</p></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <p className= 'shadow-2xl text-4xl text-slate-600 -mt-11 lg:mr-24  text-center uppercase'>salad</p></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <p className= 'shadow-2xl text-4xl text-slate-600 -mt-11 lg:mr-24  text-center uppercase'>salad</p></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <p className= 'shadow-2xl text-4xl text-slate-600 -mt-11 lg:mr-24  text-center uppercase'>salad</p></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        <p className= 'shadow-2xl text-4xl text-slate-600 -mt-11 lg:mr-24  text-center uppercase'>salad</p></SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default CategoryFood;