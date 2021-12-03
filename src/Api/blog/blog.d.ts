interface Blog{
  id:number,
  title: string,
  content: string
}
interface DataBean{
  success: boolean,
  error: string,
  body: Blog[]
}