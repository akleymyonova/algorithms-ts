function topKFrequent(nums: number[], k: number): number[] {
    const counts: Map<number, number> = new Map();
    for (let num of nums) {
        const count = counts.get(num);
        counts.set(num, count !== undefined ? count + 1 : 1);
    }

    const buckets = new Array<number[]>(nums.length + 1);
    counts.forEach((freq, num) => {
        if(!buckets[freq]) buckets[freq] = [];
        buckets[freq].push(num);
    })

    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (!buckets[i]) continue;
        
        result.push(...buckets[i]);
        if (result.length >= k) {
            break;
        }
    }

    return result.slice(0, k);

}