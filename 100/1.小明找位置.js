/**
 * 小朋友出操，按学号从小到大排成一列；小明来迟了，请你给小明出个主意，让他尽快找到他应该排的位置。
 * 算法复杂度不高于nLog(n)，学号为整数类型，队列规模<=10000
 * 
 * 输入描述：
 * 1、第一行：输入已排成队列的小朋友的学号（正整数），以“,”隔开；例如：93,95,97,100,102,123,155
 * 2、第二行：小明学号：如110
 * 
 * 输出描述：
 * 输出一个数字，代表队列位置（从1开始）
 * 例如：
 * 6
 */
const str = '93,95,97,100,102,123,155'
const target = 110

function binarySearch(nums, target) {
    let left = 0, right = nums.length -1, mid = 0
    while(left <= right) {
        if (nums[middle] < target) {
            left = mid + 1
        } else if (nums[middle] > target) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return nums[mid] > target ? mid : mid + 1
}

return binarySearch(str.split(','), target) + 1