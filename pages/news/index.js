import Link from 'next/link';
import { Fragment } from 'react';


function NewsPage(){
    return <Fragment>
      <h1> The News Page</h1>
      <ul>
        <li><Link href="/news/blockchain-is-beautiful">Blockchain is Beautiful</Link></li>
        <li>NextJs Is A Great Framework</li>
        <li>Something Else</li>
      </ul>
      </Fragment>
  }
  
  export default NewsPage;