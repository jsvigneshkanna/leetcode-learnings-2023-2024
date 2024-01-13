# Write your MySQL query statement below
select unique_id, name
from Employees as em left join EmployeeUNI as emu
on em.id = emu.id