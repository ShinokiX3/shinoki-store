import { IAmazonProductById, IAmazonProductsByCategory } from './../../types/products.interface';
import { IAmazonCategoryResponse, IAmazonParentCategoryResponse } from './../../types/categories.interface';
import { axiosAmazon } from '../../api/amazonApi';

// TODO: Need to typed all of these categories

const PRODUCT = '/request'
const AMAZON_API_KEY = '7E04C94443284A7DB45B96F934269B8A'
const AMAZON_DOMAIN = 'amazon.com'

const withApiKey = () => {
    return `${PRODUCT}?api_key=${AMAZON_API_KEY}&amazon_domain=${AMAZON_DOMAIN}`
}

// TODO: create wrapper for try catch

export const AmazonProduct = {
    async getProductsByTerm(term: string) {
        const { data } = await axiosAmazon.get<any>(`${withApiKey()}&type=search&search_term=${term}&sort_by=price_high_to_low`)

        return data
    },
    
    async getByCategoryId(id: string | number) {
        try {
            const { data } = await axiosAmazon.get<IAmazonProductsByCategory>
                (`${withApiKey()}&type=category&category_id=${id}&sort_by=price_high_to_low`)
            
            return data
        } catch (error) {
            return []
        }
    },

    async getProductById(id: string | number) {
        try {
            const { data } = await axiosAmazon.get<IAmazonProductById>
                (`${withApiKey()}&type=product&asin=${id}`)
            
            return data
        } catch (error) {
            return []
        }

        // https://api.rainforestapi.com/request?api_key=demo&type=product&asin=B000YDDF6O&amazon_domain=amazon.com
    }
}