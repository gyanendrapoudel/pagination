const rendering= (employees)=>{
const row = document.querySelector('.js-row')
let html = ''
employees.forEach((employee) => {
  const { id, avatar_url, login, url } = employee
  html += `
            <div class="bg-danger col-6 col-sm-4 col-md-3 col-lg-2 p-1 pb-3 text-capitalize text-center   rounded shadow-lg" >
                <img src="${avatar_url}" alt="hello" class="img rounded-circle" >
                <p class="mt-2">${login}</p>
                <a href="${url}" class="bg-primary text-light p-2 rounded-pill text-decoration-none ps-3 pe-3"> View Profile</a>
            </div>
            `
})
row.innerHTML += `${html}`
let btnHTML = ` <div class="row justify-content-center">
     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link" style="max-width:40px">
       Prev
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link" style="max-width:20px">
       1
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link" style="max-width:20px">
        2
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        3
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        4
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        5
      </div>
    <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        6
      </div>
   <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        7
      </div>
    <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        8
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        9
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:20px">
        10
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link" style="max-width:40px">
        Next
      </div>
      <div>
  `
 const ele = document.createElement('div')
 ele.classList.add("row", "mt-3", "justify-content-center")
 ele.innerHTML = btnHTML
row.insertAdjacentElement("afterend",ele)
}
export {rendering}