import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const VideoReviews = ({ data }) => {
    return (
        <div style={{width: '96vw', overflow: 'hidden'}}>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                width={1000}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.product?.videos_additional?.map(item => (
                    <SwiperSlide key={item.id}>
                        <Image
                            width={240}
                            height={140}
                            alt="influencer video"
                            loader={() => item.video_image_url}
                            src={item.video_image_url}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoReviews;