export interface IEstate{
  _id: string
  title: string
  description: string
  price: number
  address: string
  ward: {_id: string, name: string, city:{_id: string,name: string}}
  category: string
  type: {_id: string, name: string}
  acreage: number
  status: string
  bedroom: number
  bathroom: number
  img_urls: string[]
  id_user: {_id: string, name: string}
}