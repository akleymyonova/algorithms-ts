/**
 * n - number of strings
 * m - the length of the longest string
 * Time complexity: O(n): n * m * log(m)
 * Space complexity: O(n): n * m
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
    let result: string[][] = [];
    const groupsByLength: Record<number, Record<string, string[]>> = {}
    strs.forEach(str => {
        if (!groupsByLength[str.length]) {
            groupsByLength[str.length] = {
                [str.split('').sort().join()]: [str]
            }
            return;
        }
        const group = groupsByLength[str.length];
        const sortedValue = str.split('').sort().join('');
        if (group[sortedValue]) {
            group[sortedValue].push(str)
        } else {
            group[sortedValue] = [str]
        }
    })
    Object.values(groupsByLength).forEach(group => {
        result = [...result, ...Object.values(group)]
    })
    return result;
}
