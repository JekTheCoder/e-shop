import { CircularNumbersService } from './circular-numbers.service'

describe('CircularNumbersService', () => {
    let service: CircularNumbersService;

    beforeEach(() => {
        service = new CircularNumbersService();
    })

    it('should create', () => {
        expect(service).toBeTruthy()
    })

    describe('normalizer', () => {
        it('should normalize negative numbers', () => {
            expect(service.normalize(-9, 11)).toBe(2)
        })

        it('should normalize the nombers', () => {
            expect(service.normalize(4, 3)).toBe(1)
        })

        it('should normalize great negative numbers', () => {
            expect(service.normalizeGreat(-12, 11)).toBe(10)
        })
    })
    
    describe('minimunDifference', () => {
        it('should find a basic minimun diff', () => {
            expect(service.minimunDifference(1, 2, 4)).toBe(1)
        })

        it('should find a negative diff', () => {
            expect(service.minimunDifference(2, 1, 4)).toBe(-1)
        })

        it('should find a reverse minimun diff', () => {
            expect(service.minimunDifference(1, 9, 10)).toBe(-2)
        })

        it('should find min diff between 10 and 1', () => {
            expect(service.minimunDifference(10, 1, 11)).toBe(2)
        })

        it('should find min diff between 1 and 10', () => {
            expect(service.minimunDifference(1, 10, 11)).toBe(-2)
        })

        it('should find an equal diff', () => {
            const minimunDiff = service.minimunDifference(1, 2, 2);
            const oneOrMinusOne = minimunDiff === 1 || minimunDiff === -1
            expect(oneOrMinusOne).toBeTrue()
        })
    })

    describe('negative', () => {
        it('should convert 9 to -2', () => {
            expect(service.negative(9, 11)).toBe(-2)
        })

        it('should convert -2 to 9', () => {
            expect(service.negative(-2, 11)).toBe(9)
        })

        it('should convert -9 to 2', () => {
            expect(service.negative(-9, 11)).toBe(2)
        })
    })

    describe('absoluteMin', () => {
        it('should choose absolute smaller between 2 and -1', () => {
            expect(service.absoluteMin(2, -1)).toBe(-1)
        })

        it('should choose absolute smaller between 2 and -10', () => {
            expect(service.absoluteMin(2, -10)).toBe(2)
        })
    })

})