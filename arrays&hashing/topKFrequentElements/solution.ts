/**
 * time complexity: O(n + d log d)
 * space complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
*/
function topKFrequent(nums: number[], k: number): number[] {
    const counts: Map<number, number> = new Map();
    for (let num of nums) {
        const count = counts.get(num);
        counts.set(num, count !== undefined ? count + 1 : 1);
    }
    return [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a)).slice(0, k);
}
