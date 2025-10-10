export interface IUser extends Document {
  _id: string
  name: string
  email: string
  role: string
  status: string
  description?: string
  avatar_url: string
}