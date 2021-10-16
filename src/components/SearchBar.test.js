const SearchBar = require("./SearchBar")

// @ponicode
describe("filterTextTable", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Pierre Edouard"], ["Michael", "George", "Jean-Philippe"], ["Jean-Philippe", "Edmond", "George"]]
        inst = new SearchBar.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.filterTextTable({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.filterTextTable({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.filterTextTable({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.filterTextTable(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("availableInStock", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Anas"], ["Pierre Edouard", "Anas", "Anas"], ["Anas", "George", "Pierre Edouard"]]
        inst = new SearchBar.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.availableInStock({ target: { checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.availableInStock({ target: { checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.availableInStock(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
