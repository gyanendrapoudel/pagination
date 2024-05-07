const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'


const data = async ()=>{
   const response =  await fetch(url)
   console.log(response)
   const result = await response.json()
   console.log(result)
   return result;
}

export  {data}