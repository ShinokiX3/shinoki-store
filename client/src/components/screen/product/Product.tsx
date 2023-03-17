import Description from '@/components/ui/product/description/Description';
import View from '@/components/ui/product/view/View';
import Review from '@/components/ui/review/Review';
import VideoReviews from '@/components/ui/videoreviews/VideoReviews';
import { IProduct } from '@/types/product.interface';
import { IAmazonProductById } from '@/types/products.interface';
import { CaretRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Col, Collapse, Divider, Image, Rate, Row } from 'antd';
import React from 'react';
const { Panel } = Collapse;

interface ICProduct {
    data: IAmazonProductById
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

const Product: React.FC<ICProduct> = ({ data }) => {
    console.log(data);

    const { product } = data

    const viewData = { 
        main_image: product?.main_image, 
        images: product?.images, 
        videos: product?.videos, 
        videos_flat: product?.videos_flat 
    }
    
    return (
        // TODO: grid wrapper
        <div style={{display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '80px', paddingLeft: '20px', paddingRight: '20px'}}>
            <div style={{display: 'flex', gap: '40px'}}>
                <View data={viewData} />
                <Description data={product} />
            </div>
            <span style={{fontSize: '16pt', fontWeight: 'bold', padding: '7px 0px', borderTop: '1px solid lightgray'}}></span>
            <div style={{padding: '0px 0px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center'}}>
                <div>
                    {data.product?.specifications?.map(item => (
                        <Row style={{display: 'flex', alignItems: 'center', fontSize: '12pt', padding: '7px 0px', maxWidth: 'auto', minWidth: 'auto'}} key={item.name}>
                            <Col style={{fontSize: '12pt', padding: '7px 0px'}} flex={'240px'}>{item.name}</Col>
                            <Col flex={'1fr'}>{item.value}</Col>
                        </Row>
                    ))}
                </div>
                <div>
                    {/* TODO: create a small version of Card view class */}
                    {data.product?.feature_bullets?.map(item => (
                        <p style={{fontSize: '12pt', padding: '5px 0px'}} key={item}>{item}</p>
                    ))}
                </div>
            </div>
            <span style={{fontSize: '16pt', fontWeight: 'bold', padding: '7px 0px', borderTop: '1px solid lightgray'}}></span>
            <VideoReviews data={data} />
            <span style={{fontSize: '16pt', fontWeight: 'bold', borderTop: '1px solid lightgray'}}></span>
            <div>
                {data.product?.top_reviews?.map(item => (
                    <Review key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Product;