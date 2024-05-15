function displayBtns() {
  const row = document.querySelector('.js-row')
  const buttons = ['1','2','3','4','5','6','7','8','9','10','11']
   let buttonsHtml = buttons.map((button)=>{
    return ` <div
        class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page ${parseInt(button)===1?"click":""} "
        style="max-width:20px"
        data-id="${button}"
      >
        ${button}
      </div>`
    
   })
   buttonsHtml.push(`<div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:40px" data-id="next">
        Next
      </div>`)
   buttonsHtml.unshift(
     `<div
       class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page"
       style="max-width:40px"
       data-id="prev"
     >
       Prev
     </div>`
   )
//  this is array
   console.log(buttonsHtml)

   buttonsHtml = buttonsHtml.join('')
  //  this this is string
  // let btnHTML = ` <div class="row justify-content-center">
  //    <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page" style="max-width:40px" data-id="prev" >
  //      Prev
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page click" style="max-width:20px" data-id="1"  >
  //      1
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page" style="max-width:20px" data-id="2" >
  //       2
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="3" >
  //       3
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="4" >
  //       4
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="5" >
  //       5
  //     </div>
  //   <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="6" >
  //       6
  //     </div>
  //  <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="7">
  //       7
  //     </div>
  //   <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="8" >
  //       8
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="9" >
  //       9
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="10" >
  //       10
  //     </div>
  //      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px" data-id="11" >
  //       11
  //     </div>
  //     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:40px" data-id="next">
  //       Next
  //     </div>
  //     <div>
  // `
  const ele = document.createElement('div')
  ele.classList.add('row', 'mt-3', 'justify-content-center')
  // ele.innerHTML = btnHtml
  ele.innerHTML =buttonsHtml
  row.insertAdjacentElement('afterend', ele)
}
export {displayBtns}