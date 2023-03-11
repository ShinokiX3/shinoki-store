import Refinements from '@/components/ui/refinements/Refinements';
import { IAmazonProductsByCategory } from '@/types/products.interface';
import React from 'react';

interface ICategory {
    data: IAmazonProductsByCategory
}

const Category: React.FC<ICategory> = ({ data }) => {
    console.log(data);
    
    return (
        <div style={{ display: 'flex' }}>
            <Refinements data={data.refinements} />
			<div>
                {data?.category_results.map(product => <h3 key={product.title}>{product.title}</h3>)}
            </div>
        </div>
    );
};

export default Category;