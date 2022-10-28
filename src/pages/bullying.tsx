import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Card from '../components/Card';
import Link from '@docusaurus/Link';

export default function BullyingPage(): JSX.Element {
    let [reportLink, setReportLink] = useState<string>()
    let [learnLink, setLearnLink] = useState<string>()
    let [district, setDistrict] = useState<string>()

    useMemo(async () => {
        let districtDataset = await (await fetch(`/data/${window.localStorage.getItem('district')}.json`)).json()
        setDistrict(districtDataset.name)
        setReportLink(districtDataset.reportBullying)
        setLearnLink(districtDataset.learnBullying)
    }, [])

    return (
        <Layout
            title={`Bullying`}>
            <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: 'linear-gradient(17deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,155,58,1) 100%)', zIndex: -1 }}></div>
            <div style={{ padding: '20px' }} className="row">
                <Card name={"Report Bullying"} href={reportLink} isExternal />
                <Card name={"Learn More About Bullying"} href={learnLink} isExternal />
            </div>
        </Layout>
    );
}
