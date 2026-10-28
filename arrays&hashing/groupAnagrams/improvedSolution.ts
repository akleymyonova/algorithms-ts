/**
 * n - number of strings
 * m - the length of the longest string
 * Time complexity: O(n * m)
 * Space complexity: O(n)
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
    const aChar = 'a'.charCodeAt(0);
    const groups: Record<string, string[]> = {};
    strs.forEach(str => {
        const lettersNum = new Array(26).fill(0);
        for (const ch of str) {
            const charIndex = ch.charCodeAt(0) - aChar;
            lettersNum[charIndex]++;
        }
        const hash = lettersNum.join();
        if (!groups[hash]) {
            groups[hash] = [];
        }
        groups[hash].push(str);
    })
    return Object.values(groups);
}
