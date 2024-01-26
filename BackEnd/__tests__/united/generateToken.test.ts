import { jwt } from '../../src/middleware/token'


it('generate key', () => {
    const token = jwt("n112jj")

    expect(token).not.toBe(null)
})
