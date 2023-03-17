import React from 'react';
import Image from 'next/image'

import { Images, Main_image, Videos } from '@/types/product.interface';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface IView {
    data: { 
        main_image: Main_image, 
        images: Images[], 
        videos: Videos[], 
        videos_flat: string 
    }
}

const contentStyle: React.CSSProperties = {
    margin: 0,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    // width: '400px'
};

const View: React.FC<IView> = ({ data }) => {
    const { main_image, images, videos, videos_flat } = data

    return (
        <div className='ju-al-center' style={{width: '40%'}}>
            <div>
                <Carousel 
                    arrows 
                    dots={false}
                    afterChange={() => {}} 
                    prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}
                    style={{height: '425px', width: '500px', display: 'flex'}}
                >
                    {images.map(image => 
                        <div key={image.link}>
                            <div style={contentStyle}>
                                {/* TODO: set global variables for these images, small, biggest, regular */}
                                <Image
                                    width={320}
                                    height={380}
                                    alt="example"
                                    loader={() => image.link}
                                    src={image.link}
                                />
                            </div>
                        </div>
                    )}
                </Carousel>
                <div className='ju-al-center' style={{gap: '10px'}}>
                    {images.map(image => 
                        <div 
                            key={image.link} 
                            className='ju-al-center' 
                            style={{padding: '2px', width: '50px', height: '50px', border: '1px solid red', borderRadius: '.2rem'}}
                        >
                            <Image
                                width={40}
                                height={40}
                                alt="example"
                                loader={() => image.link}
                                src={image.link}
                            />
                        </div>
                    )}
                    {videos.map(video => 
                        <div 
                            key={video.thumbnail} 
                            className='ju-al-center' 
                            style={{padding: '2px', width: '50px', height: '50px', border: '1px solid red', borderRadius: '.2rem'}}
                        >
                            <Image
                                width={40}
                                height={25}
                                alt="example"
                                loader={() => video.thumbnail}
                                src={video.thumbnail}
                            />
                        </div>
                    )}
                </div>            
            </div>
        </div>
    );
};

export default View;