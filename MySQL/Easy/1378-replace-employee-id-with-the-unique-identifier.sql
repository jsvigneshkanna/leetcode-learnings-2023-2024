# Write your MySQL query statement below

# Left join 
# takes all entries from left table and if corresponding
# entry not there in right table, consider it as NULL

select unique_id, name
from Employees em left join EmployeeUNI emu
on em.id = emu.id