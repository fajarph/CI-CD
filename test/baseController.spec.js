const baseController = require("../controllers/baseController.js")
const mockRequest = (body = {}) => ({body})
const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}

describe("base.index function", () => {
    test("/", done => {
        const req = mockRequest()
        const res = mockResponse()
        baseController.index(req,res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            status: true,
            message: "Hello World"
        })
        done()
    })
})