const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'


const data = async ()=>{
   const response =  await fetch(url)
   const result = await response.json()

   return result;
}

export  {data}