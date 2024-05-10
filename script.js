import {data} from './data.js'
import pagination from './pagination.js';
import { rendering } from './rendering.js';
import { displayBtns } from './displayBtns.js';

let newEmployees 
let slide=0
const employees = await details();

// pages

rendering(newEmployees[slide])
displayBtns();

const pageNumbers = document.querySelectorAll('.js-page')

pageNumbers.forEach((number,i)=>{
    // adding event on each page
    number.addEventListener('click',(e)=>{
    
      let index = e.currentTarget.textContent.trim()
      if(index==="Prev"){
         if(slide<1){
            slide=11
         }else{
            slide-=1;
        }
        console.log('slide from Prev', slide)
        rendering(newEmployees[slide])
        return
      } 
      if(index==="Next"){
        if (slide >10) {
          slide = 0
        } else {
          slide += 1
        }
        console.log('slide from Next', slide)
        rendering(newEmployees[slide])
        return
      }

      slide = parseInt( e.currentTarget.textContent)
      
      rendering(newEmployees[slide])
      pageNumbers.forEach((n,i)=>{
        
        parseInt(n.dataset.id) === slide
          ? `${pageNumbers[slide].classList.add('click')}`
          : `${pageNumbers[i].classList.remove('click')}`
      })
    })
})

async function details(){
    const heading = document.querySelector('.title')
    const employees = await data()
    heading.textContent='Pagination'
     newEmployees = pagination(employees)
   
    return employees
}


