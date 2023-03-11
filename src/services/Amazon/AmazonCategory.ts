import { IAmazonCategoryResponse, IAmazonParentCategoryResponse } from './../../types/categories.interface';
import { axiosAmazon } from './../../api/amazoneApi';

// TODO: Need to typed all of these categories

const CATEGORIES = '/categories'
const AMAZON_API_KEY = '5779EF638D444FCA90FFD9B56B71F0B6'
const AMAZON_DOMAIN = 'amazon.com'

const withApiKey = () => {
    return `${CATEGORIES}?api_key=${AMAZON_API_KEY}&domain=${AMAZON_DOMAIN}`
}

// parrent id

export const AmazonCategory = {
	async getAllCategories() {
		const { data } = await axiosAmazon.get<IAmazonCategoryResponse>(withApiKey())
        const { request_info: {success: success}, categories } = data;

        // TODO: Checkout for errors
        
        if (success) return categories
        else return []
	},

    async getCategory(id: string) {
        const { data } = await axiosAmazon.get<IAmazonParentCategoryResponse>(`${withApiKey()}&parent_id=${id}`)
        const { request_info: {success: success}, categories, current_category } = data;

        if (success) return categories
        else return []
    },

    async getCategoriesByTerm(term: string) {
        const { data } = await axiosAmazon.get<any>(`${withApiKey()}&type=standard&search_term=${term}`)
        // const { request_info: {success: success}, categories, current_category } = data;

        return data
        // if (success) return categories
        // else return []
    }
}