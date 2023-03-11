import React, { useState } from 'react';
import { IRefinements } from '@/types/refinements.interface';

import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import styled from 'styled-components';

interface ICRefinements {
    data: IRefinements
}

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
        label: `Long Label: ${value}`,
        value,
    });
}

const RefinementsWrapper = styled.div`
    display: flex;
    min-width: 20%;
    padding: 10px;
`

const Refinements: React.FC<ICRefinements> = ({ data }) => {
    console.log(data);

    const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);

    const selectProps: SelectProps = {
        mode: 'multiple',
        style: { width: '100%' },
        value,
        options,
        onChange: (newValue: string[]) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };
    
    return (
        <RefinementsWrapper>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Select {...selectProps} />
            </Space>
        </RefinementsWrapper>
    );
};

export default Refinements;