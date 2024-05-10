function displayBtns() {
  const row = document.querySelector('.js-row')

  let btnHTML = ` <div class="row justify-content-center">
     <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page" style="max-width:40px">
       Prev
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page" style="max-width:20px">
       1
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light hover-link js-page" style="max-width:20px">
        2
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        3
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        4
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        5
      </div>
    <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        6
      </div>
   <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        7
      </div>
    <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        8
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        9
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:20px">
        10
      </div>
      <div class="col-2 col-sm-1 bg-primary m-1 d-flex justify-content-center rounded text-light  hover-link js-page" style="max-width:40px">
        Next
      </div>
      <div>
  `
  const ele = document.createElement('div')
  ele.classList.add('row', 'mt-3', 'justify-content-center')
  ele.innerHTML = btnHTML
  row.insertAdjacentElement('afterend', ele)
}
export {displayBtns}