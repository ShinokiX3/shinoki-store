import React from 'react';
import { ICategoryResults } from '@/types/categoryResults.interface';
import Image from 'next/image'

import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar, Card as ACard, Space } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';
const { Meta } = ACard;

interface ICard {
    product: ICategoryResults
}

// TODO: rewrite card ui & logic

const Card: React.FC<ICard> = ({ product }) => {
    return (
        <Link href={`/product/${product.asin}`}>
            <ACard
                hoverable
                style={{ width: '250px', position: 'relative' }}
                cover={
                    // TODO: make image wrapper adaptive
                    <div style={{paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            width={135}
                            height={165}
                            // fill
                            // object-fit="scale-down"
                            alt="example"
                            loader={() => product.image}
                            src={product.image}
                            // placeholder='blur'   
                        />
                    </div>
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                
                <Meta
                    title={product.title.substring(0, 35)}
                    description="This is the description"
                />
            </ACard>
        </Link>
    );
};

export default Card;