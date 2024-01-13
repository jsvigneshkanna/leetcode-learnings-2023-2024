# Write your MySQL query statement below

# Left join 
# takes all entries from left table and if corresponding
# entry not there in right table, consider it as NULL

select unique_id, name
from Employees as em left join EmployeeUNI as emu
on em.id = emu.id