/* eslint-disable camelcase */
export interface Product {
  id: string
  name: string
  price: string
  image: string
  category: string
}

export interface User {
  username: string
  email: string
  role: string
}

export interface IProyects {
  created_at: Date
  descripcion: string
  estado: string
  empresa: string
  nombre: string
  img: string
  proyectoId: number
  slug: string
  usuario: string
  fecha: Date
}
