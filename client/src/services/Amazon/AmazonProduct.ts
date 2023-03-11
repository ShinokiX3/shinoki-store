import { IAmazonProductsByCategory } from './../../types/products.interface';
import { IAmazonCategoryResponse, IAmazonParentCategoryResponse } from './../../types/categories.interface';
import { axiosAmazon } from './../../api/amazoneApi';

// TODO: Need to typed all of these categories

const PRODUCT = '/request'
const AMAZON_API_KEY = '5779EF638D444FCA90FFD9B56B71F0B6'
const AMAZON_DOMAIN = 'amazon.com'

const withApiKey = () => {
    return `${PRODUCT}?api_key=${AMAZON_API_KEY}&amazon_domain=${AMAZON_DOMAIN}`
}

export const AmazonProduct = {
    async getProductsByTerm(term: string) {
        const { data } = await axiosAmazon.get<any>(`${withApiKey()}&type=search&search_term=${term}&sort_by=price_high_to_low`)

        return data
    },
    
    async getByCategoryId(id: string | number) {
        const { data } = await axiosAmazon.get<IAmazonProductsByCategory>
            (`${withApiKey()}&type=category&category_id=${id}&sort_by=price_high_to_low`)
        
        return data
    }
}