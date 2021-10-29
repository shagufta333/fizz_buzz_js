const subject = new FizzBuzz

describe("FizzBuzz", ()=>{

    
    it("is expected to return a number if none of the game rules apply", ()=>{
        expect(subject.check(1)).toEqual(1)
    })

    it("is expected to return "fizz" if number is divisable by 3", ()=>{
        expect(subject.check(3)).toEqual("fizz")
    })

    it("is expected to return "buzz" if number is divisable  by 5", ()=>{
        expect(subject.check(5)).toEqual("buzz")

    })
    
    it("is expected to return "fizz-buzz" if number is divisable by 15", ()=>{
        expect(subject.check(15)).toEqual("fizz-buzz")
    })



});