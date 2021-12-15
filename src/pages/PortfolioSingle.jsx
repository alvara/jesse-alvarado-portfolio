import React from 'react'
import { useParams } from 'react-router';
import { portfolio } from '../data';
// add graphQL to manage data for posts in future

export default function PortfolioSingle() {
const { slug } = useParams();
const item = portfolio.filter((item) => { return item.slug === slug })[0];
  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  )
}
