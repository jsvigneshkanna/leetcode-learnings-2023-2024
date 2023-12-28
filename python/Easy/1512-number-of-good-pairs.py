class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        seen = {}
        good_pairs =0 
        for num in nums:
            if num in seen: 
                good_pairs += seen[num]
                seen[num] += 1
            else:
                seen[num] = 1
        return good_pairs
        