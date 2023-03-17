import React from 'react';

import type { PaginationProps } from 'antd';
import { Pagination as APagination } from 'antd';

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

const Pagination = ({ current = 1, total = 1, handler }) => {
    return (
        <div>
            <APagination showQuickJumper defaultCurrent={current} total={total} onChange={onChange} />
        </div>
    );
};

export default Pagination;