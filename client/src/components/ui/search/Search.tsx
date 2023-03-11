import { LoadingOutlined } from '@ant-design/icons';
import { Empty, Spin, TreeSelect } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    width: 100%;
    min-height: 130px;
`

const SearchHandling = ({ loading, data }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if (loading) return (
        <Spinner className='ju-al-center'>
            <Spin indicator={antIcon} />
        </Spinner>
    )
    if (data.length === 0) return <Empty />

    return (
        <div>
            {data.map(item => <div key={item.title}>{item.title}</div>)}
        </div>
    )
}

// { settings: { data, loading } }: {settings: { loading: boolean, data: any }}

const Search = ({ data, setData, value, setValue, loading }) => {

    return (
        <TreeSelect
            showArrow={false}
            showSearch={true}
            style={{ width: '40%', top: 0 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Search data..."
            allowClear
            treeDefaultExpandAll
            value={value}
            onChange={setValue}
            onSearch={setValue}
            onClear={() => setData([])}
            treeDataSimpleMode
            dropdownRender={() => 
                <SearchHandling loading={loading} data={data} />
            }
        />
    );
};

// treeData={searchResults}

export default Search;