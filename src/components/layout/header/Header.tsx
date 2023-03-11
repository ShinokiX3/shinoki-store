import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Avatar } from 'antd';
import { UserOutlined, ShoppingOutlined, MenuOutlined, LoadingOutlined } from '@ant-design/icons';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import { useDebounce } from '@/hooks/useDebounce';
import { AmazonProduct } from '@/services/Amazon/AmazonProduct';
import Search from '@/components/ui/search/Search';

const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    svg {
        cursor: pointer;

        width: var(--ico-w);
        height: var(--ico-h);
    }
`

const Logo = styled.span`
    font-family: var(--ff-primary);
    font-size: var(--fs-primary);
    background-color: var(--back-color);
    gap: 20px;

    h3 {
        cursor: pointer;
        user-select: none;
    }
`

const Nav = styled.nav`
    gap: 20px;
`

const Header = () => {
    const [value, setValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const user = useTypedSelector(state => state.user);
    const { toggleUpperDrawer } = useActions();

    const debouncedValue = useDebounce(value, 800);

    // TODO: change fetch to react query or vercel swr

    useEffect(() => {
        (async () => {
            if (debouncedValue) {
                setLoading(true);
                const response = await AmazonProduct.getProductsByTerm(debouncedValue)
                          
                const productResults = response.search_results.map((item, index) => { 
                    return {id: item.asin, pId: index, value: item.title, title: item.title} 
                })

                // const categoryResults = response2.categories.map((category, index) => { 
                //     return {id: category.id, pId: index, value: category.name, title: category.name} 
                // })

                if (productResults.length === 0) setSearchResults([])
                else setSearchResults(productResults);
                
                setLoading(false);
            } else console.log('declined')
        })()
    }, [debouncedValue]);

    return (
        <HeaderBlock>
            <Logo className='ju-al-center'>
                <MenuOutlined style={{width: '20px', height: '20px', marginBottom: '9px'}} onClick={() => toggleUpperDrawer(!user.upperDrawer)} />
                <h3>Shinoki store</h3>
            </Logo>

            <Search value={value} setValue={setValue} data={searchResults} setData={setSearchResults} loading={loading} />
            
            <Nav className='ju-al-center'>
                <ShoppingOutlined style={{display: 'flex', width: '30px', height: '30px'}} />
                <Avatar size='large' icon={<UserOutlined />} />
            </Nav>
        </HeaderBlock>
    );
};

export default Header;