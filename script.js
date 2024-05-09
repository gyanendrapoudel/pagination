import {data} from './data.js'
import pagination from './pagination.js';
import { rendering } from './rendering.js';

let newEmployees 
const employees = await details();


rendering(newEmployees[0])

async function details(){
    const heading = document.querySelector('.title')
    
    const employees = await data()
    heading.textContent='Pagination'
     newEmployees = pagination(employees)
    console.log('pages')
    return employees
}


