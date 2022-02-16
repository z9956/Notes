import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';

import styles from './index.module.css';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	const History = useHistory();
	useEffect(() => {
		History.push('/docs/');
	}, []);

	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<h5 className={styles.loading}>loading...</h5>
		</Layout>
	);
}
