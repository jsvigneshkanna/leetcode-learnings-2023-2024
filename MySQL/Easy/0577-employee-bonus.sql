# Write your MySQL query statement below

select name, bonus
from Employee as em left join Bonus as b
on em.empId = b.empId
where b.bonus is null or b.bonus < 1000