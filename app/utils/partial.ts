import { DeepPartial } from '@/types/partial';
import assert from 'assert';

function isPlainObject(x: unknown): x is {} {
    return x !== null && typeof x === 'object' && !Array.isArray(x);
}

export function mergePartial<T extends {}>(original: T, put: Partial<T>): T {
    return { ...original, ...put };
}

export function mergeDeepPartial<T extends {}>(original: T, patch: unknown): T {
    assert(((x): x is DeepPartial<T> => true)(patch));
    const result = { ...original };
    for (const key of Object.keys(patch) as Array<keyof T>) {
        const originalValue = result[key];
        const patchValue    = patch[key];
        if (
            isPlainObject(patchValue) && 
            isPlainObject(originalValue)
        ) {
            result[key] = mergeDeepPartial(
                originalValue,
                patchValue as DeepPartial<typeof originalValue>
            );
        } else if (patchValue !== undefined) {
            result[key] = patchValue as any;
        }
    }
    return result;
}
