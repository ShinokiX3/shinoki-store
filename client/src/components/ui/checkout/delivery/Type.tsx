import { Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import { Item } from "../Delivery";

const Wrapper = ({ deliveryWay, value, title, children }) => {
    return (
        <>
        {deliveryWay !== value
            ?   <Radio value={value} style={{paddingLeft: '15px'}}>
                    {title}
                </Radio>
            :   <Item style={{display: 'flex', flexDirection: 'column', alignItems: 'initial'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Radio value={value}>{title}</Radio>
                        <p>{`At carrier's rates`}</p>
                    </div>
                    <div>
                        {children}
                    </div>
                </Item>
        }
        </>
    )
}

const NovaPoshta = ({ deliveryWay }) => {
    return (
        <Wrapper deliveryWay={deliveryWay} value={1} title='Nova Poshta'>
            Content Np
        </Wrapper>
    )
}

const UkrPoshta = ({ deliveryWay }) => {
    return (
        <Wrapper deliveryWay={deliveryWay} value={2} title='Ukr Poshta'>
            Content Ukr
        </Wrapper>
    )
}

const Type = () => {
    const [deliveryWay, setDeliveryWay] = useState(0);

    const handleDeliveryType = (e: RadioChangeEvent) => {
        setDeliveryWay(e.target.value);
    };
    
    return (
        <Radio.Group onChange={handleDeliveryType} value={deliveryWay} style={{width: '100%'}}>
            <Space direction="vertical" style={{width: '100%'}}>
                <NovaPoshta deliveryWay={deliveryWay} />
                <UkrPoshta deliveryWay={deliveryWay} />
            </Space>
        </Radio.Group>
    )
}

export default Type