const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Functionup",
  password: "sangram",
  port: 5432,
});

const createdepart = (req, res) => {
  const { name, empcount } = req.body;
  pool.query(
    'INSERT INTO department (name, empcount) VALUES ($1,$2) RETURNING * ',
    [name, empcount],
    (err, results) => {
      if (err){
        console.log(err.message)
      }
      res.status(200).json(results.rows[0])
    },
   
  );
};

const createemployes=(req, res) => {
    const { name, email, hiredate,id } = req.body

    
        pool.query("INSERT INTO employess (name, email, hiredate,id) VALUES ($1,$2,$3,$4)", [name, email, hiredate,id], (error, results) => {
            if (error) throw error;
            res.status(201).json("Employee added successfully",results.rows[0])
        })
    
}


module.exports = { createdepart,createemployes };
