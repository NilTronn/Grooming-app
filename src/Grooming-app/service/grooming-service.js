export default class GroomingService {
    baseUrl = 'http://localhost:3001'

    getData = async (url) => {
        const res = await fetch(this.baseUrl + url)

        if (!res.ok) {
            throw new Error(`Could not fetch url: ${this.baseUrl + url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getHeaderDesc = async () => {
        return await this.getData('/header-desc')
    }
}