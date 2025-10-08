export interface IEstate{
  title: string
  description: string
  price: number
  address: string
  ward: {_id: string, name: string, city:{_id: string,name: string}}
  category: {_id:string, name: string}
  type: {_id: string, name: string}
  bedroom: number
  bathroom: number
  img_urls: string[]
  id_user: {id_: string}
}