import { ICategoryResults } from './categoryResults.interface';
import { IRefinements } from "./refinements.interface"

export type Request_info = {
    success: boolean
    credits_used: number
    credits_remaining: number
}

export type Request_metadata = {
    id: string
    created_at: Date
    processed_at: Date
    total_time_taken: number
    amazon_url: string
}

export type Request_parameters = {
    url: string
    type: string
}

export type Category_list = {
    title: string
    link: string
    image: string
}

export type Pagination = {
    current_page: number,
    total_pages: number
}

export interface IAmazonProductsByCategory {
    request_info: Request_info,
    request_metadata: Request_metadata,
    request_parameters: Request_parameters,
    category_results: ICategoryResults[],
    category_list: Category_list[],
    pagination: Pagination,
    refinements: IRefinements
}