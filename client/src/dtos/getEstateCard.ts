export interface ICardEstate{
  _id: string
  img_urls: [string]
  title: string
  description: string
  price: number
  address: string
  status: string
  ward: {_id: string, name: string, city:{_id: string,name: string}}
  category: string
  type: {_id: string, name: string}

}