import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  const History = useHistory();
  useEffect(() => {
    History.push('/docs/');
  }, []);


  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      loading...
    </Layout>
  );
}
