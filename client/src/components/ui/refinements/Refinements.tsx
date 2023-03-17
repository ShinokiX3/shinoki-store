import React, { useEffect, useState } from 'react';
import { IRefinements } from '@/types/refinements.interface';

import { Button, InputNumber, Rate, SelectProps, Slider } from 'antd';
import { Select, Space } from 'antd';
import styled from 'styled-components';

interface ICRefinements {
    data: IRefinements
}

interface ItemProps {
  label: string;
  value: string;
}

const Wrapper = styled.div`
    display: flex;
    min-width: 20%;
`

// TODO: move to utis

const titled = (title: string) => {
    console.log(title.split('_').join(' '));
}   

const Refinements: React.FC<ICRefinements> = ({ data }) => {
    const [value, setValue] = useState({
        prime: [],
        departments: [],
        reviews: [],
        price: [],
        brand: [],
        cookware_and_bakeware_material: [],
        global_store: [],
        condition: [],
        new_arrivals: [],
        international_shipping: [],
        availability: [],
        seller: [],
    });

    const [rateValue, setRateValue] = useState('');

    const selectProps: SelectProps = {
        mode: 'multiple',
        style: { width: '100%' },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };

    return (
        <Wrapper>
            <Space direction="vertical" style={{ width: '100%', gap: '15px' }}>
                {Object.entries(data).map(([ id, items ], index) => {
                    const title = items[0].refinement_display_name;

                    if (title === 'Reviews') {
                        return (
                            <>
                                <h3 key={index}>{title}</h3>
                                <Rate tooltips={items.map(item => item.name).reverse()} value={rateValue} onChange={setRateValue} />
                            </>
                        )
                    }

                    if (title === 'Price') {                        
                        return (
                            <>
                                <h3 key={index}>{title}</h3>
                                <Space>
                                    <InputNumber
                                        defaultValue={1000}
                                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                                        // onChange={onChange}
                                    />
                                    <InputNumber
                                        defaultValue={1000}
                                        // min={0}
                                        // max={100}
                                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        // parser={(value) => value!.replace('%', '')}
                                        // onChange={onChange}
                                    />
                                    <Button>Submit</Button>
                                </Space>
                                <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
                            </>
                        )
                    }

                    if (title === 'Deals & Discounts' || 
                        title === 'New & Upcoming' || 
                        title === 'Condition') {
                            console.log(items);
                        return (
                            <>
                                <h3 key={index}>{title}</h3>
                                <Space>
                                    {items.map(item => 
                                        <Button style={{fontSize: '11pt'}} type="text" key={item.name}>
                                            {item.name}
                                        </Button>
                                    )}
                                </Space>
                            </>
                        )
                    }

                    if (title === 'From Our Brands' ||
                        title === 'Amazon Global Store' ||
                        title === 'Prime') {
                        return (
                            <></>
                        )
                    }
                    
                    return (
                        <>
                            <h3 key={index}>{title}</h3>
                            <Select {...selectProps} 
                                fieldNames={{label: 'name', value: 'value'}}
                                options={data[id]} 
                                value={value[id]}
                                onChange={(newValue: string[], option) => { 
                                    console.log(newValue, option)
                                    setValue(newValue);
                                }}
                            />
                        </>
                    )
                })}
            </Space>
        </Wrapper>
    );
};

export default Refinements;