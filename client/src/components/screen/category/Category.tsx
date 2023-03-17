import Card from '@/components/ui/card/Card';
import List from '@/components/ui/list/List';
import Pagination from '@/components/ui/pagination/Pagination';
import Refinements from '@/components/ui/refinements/Refinements';
import { IAmazonProductsByCategory } from '@/types/products.interface';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 20px; 
    gap: 20px;
`

// move to list component

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

interface ICategory {
    data: IAmazonProductsByCategory
}


const Category: React.FC<ICategory> = ({ data }) => {
    console.log(data);
    
    
    return (
        <Wrapper>
            <Refinements data={data.refinements} />
            {/* TODO: split cards to card */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                <CardWrapper>
                    {data.category_results.map(product => <Card key={product.title} product={product} />)}
                </CardWrapper>
                <Pagination current={data.pagination.current_page} total={data.pagination.total_pages} handler={() => console.log('handle page')} />
            </div>
        </Wrapper>
    );
};

export default Category;