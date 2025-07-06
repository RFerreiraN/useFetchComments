import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const CommentsComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/comments')

  return (
    <>
      <h1>Listado de Comentarios</h1>
      <hr />
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    </>
  )
}
