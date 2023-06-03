import React from 'react'
import Career from '../../components/careers/Career'
import Investor from '../../components/careers/Investor'
import Mission from '../../components/careers/Mission'
import Values from '../../components/careers/Values'
import Team from '../../components/careers/Team'


export default function page() {
  return (
    <>
        <Career/>
        <Mission/>
        <Values/>
        <Team/>
        <Investor/>
    </>
  )
}
