import React, { useCallback, useContext, useEffect, useState } from 'react'
import 'materialize-css'
import { useParams } from 'react-router'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from "../components/Loader";
import { LinkCard } from "../components/LinkCard";

export const DetailsPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [link, setLink] = useState(null)
  const linkId = useParams().id

  const getLink = useCallback( async () => {
    try {
      const data = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLink(data)
    } catch (e) {}
  }, [token, linkId, request])

  useEffect( () => {
    getLink()
  }, [getLink])

  if( loading){
    return( 
      <Loader></Loader>
    )
  }

  return (
    <>
      {!loading && link && <LinkCard link={link} />}
    </>
  );
}
