import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CircularNumbersService {

    minimunDifference(value1: number, value2: number, max: number) {
        const positive = value2 - value1;

        return this.absoluteMin(positive, this.negative(positive, max))
    }

    negative(value1: number, max: number): number {
        return value1 < 0 ? this.normalize(value1, max) : -this.negative(-value1, max);
    }

    absoluteMin(value1: number, value2: number) {
        return Math.abs(value1) < Math.abs(value2) ? value1 : value2;
    }

    minus(value: number, add: number, max: number) {
        return this.sum(value, -add, max)
    }

    sum(value: number, add: number, max: number) {
        return this.normalize(value + add, max)
    }

    normalize(value: number, max: number) {
        return (value + max) % max
    }

    normalizeGreat(value: number, max: number) {
        return this.normalize(value % max, max)
    }
}