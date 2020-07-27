export default class GroomingService {
    // baseUrl = 'http://localhost:3001'
    baseUrl = 'https://niltronn.github.io/db.json'
    // baseUrl = 'http://localhost:3000/db.json'
    DB = null

    getData = async (prop) => {
        const res = await fetch(this.baseUrl)

        if (!res.ok) {
            throw new Error(`Could not fetch url: ${this.baseUrl}, status: ${res.status}`)
        }

        this.DB = await res.json()
        return this.DB[prop]
    }

    checkDB = async (prop) => {
        if (this.DB) {
            return this.DB[prop]
        }

        return await this.getData(prop)
    }

    getHeaderDesc = async () => {
        return await this.checkDB("header-desc")
    }
}