import Post from "./post"

async function getData(){
let req= await fetch("https://jsonplaceholder.typicode.com/posts")
return req.json()

}
export default async function Posts(){
let posted= await getData()

return (
    posted.map((p)=>(
    <Post key={p.id} data={p} />
    ) 
)
)

}