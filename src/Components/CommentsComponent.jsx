import React from 'react'
import { useFetch } from '../Hooks/useFetch'

export const CommentsComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/comments')

  return (
    <>
      <h1>Listado de Comentarios</h1>
      <hr />
      {isLoading
        ? <h5>Cargando...</h5>
        : errors
          ? <p>Ha ocurrido un error, {errors}</p>
          : <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.body}</td>
                </tr>
              ))}

            </tbody>
          </table>
      }

    </>
  )
}
