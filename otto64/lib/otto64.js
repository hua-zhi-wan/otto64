import { Base64 } from 'js-base64'

const ottowords = [
    '三人', '上不去', '上路', '下不来',
    '不值得', '不配', '东厂', '中单',
    '为什么', '优越狗', '但是呢', '低分狗',
    '你告诉我', '健全', '创死', '卡在这里了',
    '卡比兽', '发育', '啥币', '回忆',
    '垃圾', '夺冠', '打比赛', '如果',
    '实力', '对', '尊尼获加', '小号',
    '尴尬', '怎么', '急眼', '总管',
    '患者', '想操作', '意义', '打野',
    '掉下去', '时光', '晚期', '最后',
    '最猛', '有什么', '杠精', '段位',
    '独轮车', '电棍', '癌症', '白银',
    '盲僧', '看不惯', '瞅几把', '知道',
    '祭拜', '穷抬杠', '膨胀', '自己',
    '虚空', '西厂', '起劲', '越塔',
    '道理', '青铜', '顺从', '飞舞',
    '黄金'
].sort()

const base64charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split('')

/**
 * @param {string} raw
 */
function base64ToOtto64(raw) {
    const set = new Set(base64charset)
    const ret = []
    for (const c of raw.split('')) {
        if (set.has(c)) {
            ret.push(ottowords[base64charset.indexOf(c)])
        }
        else {
            throw `unexpected token: ${c}`
        }
    }
    return ret.join('')
}

/**
 * @param {string} str
 */
function otto64ToBase64(str) {
    const ret = []
    while (str.length > 0) {
        let flag = false
        for (const i in ottowords) {
            const word = ottowords[i]
            if (str.startsWith(word)) {
                str = str.substring(word.length)
                ret.push(base64charset[i])
                flag = true
                break
            }
        }
        if (!flag) {
            throw `unexpected token: ${str.substring(0, 10)}...`
        }
    }
    return ret.join('')
}

/**
 * A utility object for encoding and decoding messages using the otto64 algorithm.
 */
export const otto64 = {
    /**
     * Encodes a message using the otto64 algorithm.
     * @param {string} msg - The message to encode.
     * @returns {string|undefined} - The encoded message, or undefined if the input is not a string.
     */
    encode(msg) {
        if (typeof msg == 'string') {
            return base64ToOtto64(Base64.encode(msg));
        }
        return undefined;
    },
    /**
     * Decodes a message encoded using the otto64 algorithm.
     * @param {string} msg - The message to decode.
     * @returns {string|undefined} - The decoded message, or undefined if the input is not a string.
     */
    decode(msg) {
        if (typeof msg == 'string') {
            return Base64.decode(otto64ToBase64(msg));
        }
        return undefined;
    }
}