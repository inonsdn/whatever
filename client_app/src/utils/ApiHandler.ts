// FOR TEST API GET LOTTO : https://lotto.api.rayriffy.com/latest
import axios from 'axios'
import BASE_URL_API from '@/utils/constants'


class ApiHandler {
    constructor () {

    }

    async getTestDataApi() {
        // get lotto
        const response = await axios.get('https://lotto.api.rayriffy.com/latest')
        return response.data
    }

    constructUrl(name: string) {
        return BASE_URL_API + name
    }

    async callApi(name: string) {
        const url = this.constructUrl(name)
        const response = await axios.get(url)
        return response.data
    }
}

export default ApiHandler