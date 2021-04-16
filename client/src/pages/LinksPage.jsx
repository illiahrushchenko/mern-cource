import React, { useCallback, useContext, useEffect, useState } from 'react'
import 'materialize-css'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from "../components/Loader";
import { LinkList } from '../components/LinkList';

export const LinksPage = () => {
  const {token} = useContext(AuthContext)
  const [links, setLinks] = useState( [])
  const {request, loading} = useHttp()

  const getLinks = useCallback( async () => {
    try {
      const data = await request(`/api/link`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      console.log(data)

      setLinks(data)
    } catch (e) {}
  }, [token, request])

  useEffect( () => {
    getLinks()
  }, [getLinks])

  if( loading){
    return( 
      <Loader></Loader>
    )
  }

  return (
    <>
      {!loading && links && <LinkList links={links} />}
    </>
  );
}
