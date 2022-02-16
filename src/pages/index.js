import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {useHistory} from '@docusaurus/router';

export default function Home() {
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
