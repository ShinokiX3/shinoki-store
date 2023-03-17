import React from 'react';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { Button, Empty, InputNumber, Rate, Space } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

// TODO: change to global variables

const Wrapper = styled.div`
    box-shadow: 4px 4px 16px 3px #CBC8CE;
    background-color: white;
    padding: 20px;
    border-radius: 1rem;
    width: 400px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
`

const Product = styled.div`
    display: flex;
    border-bottom: 1px solid lightgrey;
    padding: 10px 0px;
`

const Offer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    cursor: pointer;
    font-size: 16pt;
    font-weight: bold;
    font-family: var(--ff-primary);
    transition: color .3s ease-in;
    &:hover {
        color: red;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0px;
`

const SubDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.p`
    font-size: 14pt; 
    font-weight: bold;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Price = styled.div`
    
`

const Cart = () => {
    const { items } = useTypedSelector(state => state.cart)
    const { clearCart } = useActions()

    console.log(items);
    
    const handleClearCart = () => {
        console.log('clear');
        
        clearCart();
    }

    if (items.length === 0) {
        return (
            <Wrapper>
                <Header>
                    <h2>Cart</h2>
                    <Button type='link' danger onClick={() => {}}>
                        Nothing to remove
                    </Button>
                </Header>
                <Empty description={
                    <span>
                        There is not any product in a cart
                    </span>
                } style={{margin: '15px 0px'}} />
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Header>
                <h2>Cart</h2>
                <Button type='link' danger onClick={handleClearCart}>
                    <DeleteOutlined />
                    Remove all
                </Button>
            </Header>
            {items && items.map(item => (
                <Product key={item.asin}>
                    <div>
                        <Image
                            width={140}
                            height={140}
                            alt={`Product ${item.asin}`}
                            loader={() => item.image.link}
                            src={item.image.link}
                        />
                    </div>
                    <Details >
                        <Title>{item.title.substring(0, 25)}</Title>
                        <SubDetails>
                            <Price>
                                {item.rrp 
                                    ? <del>{item.rrp.raw}</del>
                                    : null
                                }
                                <p style={{fontSize: '12pt', fontWeight: 'bold'}}>{item?.price?.raw || 'Sold'}</p>
                            </Price>
                        </SubDetails>
                        <Controls>
                            <InputNumber style={{width: '140px'}} min={1} max={10} defaultValue={1} onChange={() => {}} />
                            <DeleteOutlined style={{fontSize: '25px'}} />
                            <HeartOutlined style={{fontSize: '25px'}} />
                        </Controls>
                    </Details>
                </Product>
            ))}
            <Offer>
                <Link href='/checkout'>Place an order</Link>
            </Offer>
        </Wrapper>
    );
};

export default Cart;