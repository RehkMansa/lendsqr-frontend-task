export const createSubArrays = <T>(items: T[], itemsPerSubarray: number) => {
    const subArrays = [];
    for (let i = 0; i < items.length; i += itemsPerSubarray) {
        subArrays.push(items.slice(i, i + itemsPerSubarray));
    }
    return subArrays;
};
