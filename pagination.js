import{data} from './data.js'
const employeesPerPage = 9
const employees = await data()
const numberOfPage = Math.ceil(employees.length/9)


export{employeesPerPage, numberOfPage}