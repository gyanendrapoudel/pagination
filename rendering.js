const rendering= (employees)=>{
const row = document.querySelector('.js-row')
let html = ''
employees.forEach((employee) => {
  const { id, avatar_url, login, url } = employee
  html += `
            <div class="bg-light col-6 col-sm-4 col-md-3 col-lg-2 p-1 pb-3 text-capitalize text-center   rounded shadow-lg" >
                <img src="${avatar_url}" alt="hello" class="img rounded-circle" >
                <p class="mt-2">${login}</p>
                <a href="${url}" class="bg-primary text-light p-2 rounded-pill text-decoration-none ps-3 pe-3"> View Profile</a>
            </div>
            `
})
row.innerHTML = `${html}`
}

export {rendering}