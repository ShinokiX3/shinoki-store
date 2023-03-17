import { axiosNovaposhta } from "@/api/novaposhtaApi";

const CATEGORY = '/';
const API_KEY = '1adc157a5ba67e26e330b15cbae9e2c7';

const withApiKey = () => {
    return `${CATEGORY}`
}

export const NovaPoshta = {
	async searchByTerm(term: string) {
		try {
            const { data } = await axiosNovaposhta.post<any>(`${withApiKey()}`,{
                apiKey: API_KEY,
                modelName: "Address",
                calledMethod: "searchSettlements",
                methodProperties: {
                    CityName: term,
                    Limit: "50",
                    Page: "1"
                }
            })

            // TODO: Checkout for errors

            return data
        } catch (error) {
            return []
        }
	},
}