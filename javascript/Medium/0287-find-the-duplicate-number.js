/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // return usingSet(nums)
    // return usingExistingArr(nums)
    return usingSlowFast(nums)
};

const usingSlowFast = (nums) => {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;   
}

const usingSet = (nums) => {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            return num
        }
        set.add(num)
    }
    return -1
}

const usingExistingArr = (nums) => {
    for (let index=0; index< nums.length; index++) {
        if (nums[Math.abs(nums[index])] < 0) {
            return Math.abs(nums[index])
        } else {
            nums[Math.abs(nums[index])] *= -1
        }
    }
    return -1
}