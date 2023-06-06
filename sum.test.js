const sum=require('./sum');

test("hi",()=>{
    expect(sum(1,3)).toBe(4);
})
test("hi",()=>{
    expect(sum(9,3)).toBe(12);
})
test("hi",()=>{
    expect(sum(2,3)).toBe(5);
})


