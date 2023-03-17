import Delivery from '@/components/ui/checkout/Delivery';
import Order from '@/components/ui/checkout/Order';
import Personal from '@/components/ui/checkout/Personal';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 100px;
`

const Checkout = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstname: '',
        lastname: '',
        phone: ''
    });

    const [delivery, setDelivery] = useState([{
        city: ''
    }]);

    return (
        <Wrapper style={{width: '60%'}}>
            <p style={{fontSize: '20pt'}}>Checkout</p>
            <Personal setData={setPersonalInfo} />
            <Order />   
            <Delivery />
        </Wrapper>
    );
};

{/* <Wrapper style={{flexDirection: 'row'}}>
    <div style={{width: '65%'}}>
        <p style={{fontSize: '20pt'}}>Checkout</p>
        <Personal setData={setPersonalInfo} />
        <Order />   
        <Delivery />
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Check>
            Check
        </Check>
    </div>
</Wrapper>

const Check = styled.div`
    box-shadow: 4px 4px 16px 3px #CBC8CE;
    background-color: white;
    padding: 20px;
    border-radius: 1rem;
    width: 270px;
    height: 400px;
` */}

export default Checkout;