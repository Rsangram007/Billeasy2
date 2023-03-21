CREATE OR REPLACE FUNCTION get_employees_by_department_and_joining_date(
  department_id INTEGER,
  start_date DATE,
  end_date DATE
) RETURNS JSONB AS $$
DECLARE
  result JSONB;
BEGIN
  SELECT jsonb_agg(e) INTO result
  FROM (
    SELECT
      employees.*,
      departments.name AS department_name
    FROM employees
    JOIN departments ON employees.department_id = departments.id
    WHERE
      employees.department_id = department_id AND
      employees.joining_date >= start_date AND
      employees.joining_date <= end_date
    ORDER BY employees.joining_date
  ) AS e;

  RETURN result;
END;
$$ LANGUAGE plpgsql;