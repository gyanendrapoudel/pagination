
const pagination = (employees)=>{
const employeesPerPage = 9

    const numberOfPage = Math.ceil(employees.length/9)

    const newEmployees =  Array.from({length:numberOfPage},(_,index)=>{
                        const start = index*employeesPerPage;
                        return employees.slice(start,start+employeesPerPage)
                        })

    return newEmployees
}
export default pagination