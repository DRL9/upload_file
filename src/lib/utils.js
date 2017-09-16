/**
 * 将...args填充到fn的参数列表前
 * @param {Function} fn
 * @param {...any} args
 * @return {Function}
 */
export function prefilling(fn, ...args) {
    return function (...moreArgs) {
        fn.apply(this, args.concat(moreArgs));
    }
}

const K_BYTE = 1024;
const M_BYTE = 1024 * K_BYTE;
const G_BYTE = 1024 * M_BYTE;
/**
 * 将文件大小换算成人类易读的度量
 * @param {Number} size
 * @param {Number} [fractionDigits=2] 保留小数位
 * @return {String}
 */
export function transferSizeHumanity(size, fractionDigits = 2) {
    if (size >= G_BYTE) {
        return (size / G_BYTE).toFixed(fractionDigits) + 'G';
    }
    if (size >= M_BYTE) {
        return (size / M_BYTE).toFixed(fractionDigits) + 'M';
    }
    if (size >= K_BYTE) {
        return (size / K_BYTE).toFixed(fractionDigits) + 'K';
    }
    return size + 'B';
}

/**
 * 空函数
 */
export const emptyFn = () => { };
