
/**
 *
 * @param {Function} fn
 * @param {...any} args
 * @return {Function}
 */
export function prefilling(fn, ...args) {
    return function (...moreArgs) {
        fn.apply(this, args.concat(moreArgs));
    }
}

/**
 * 空函数
 */
export const emptyFn = () => { };
