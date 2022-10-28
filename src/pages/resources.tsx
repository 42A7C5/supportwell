import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Card from '../components/Card';

export default function ResourcesPage(): JSX.Element {
    let [resources, setResources] = useState([])
    let [district, setDistrict] = useState<string>()

    useMemo(async () => {
        let districtDataset = await (await fetch(`/data/${window.localStorage.getItem('district')}.json`)).json()
        setDistrict(districtDataset.name)
        setResources(districtDataset.resources)
    }, [])
    
    return (
        <Layout
            title={`Resources`}>
            <div style={{ padding: '20px' }}>
                <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: 'linear-gradient(17deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,155,58,1) 100%)', zIndex: -1 }}></div>
                <div className="row">
                    {resources.map((resource) => {
                        return <Card name={resource.name} description={resource.description} href={resource.href} isExternal isCorporate district={district} />
                    })}
                    <Card name="988 Hotline" description="In 2020, Congress designated the new 988 dialing code to be operated through the existing National Suicide Prevention Lifeline." href="https://www.samhsa.gov/find-help/988" isExternal />
                    <Card name="SAMHSA Homepage" description="The Substance Abuse and Mental Health Services Administration is a branch of the U.S. Department of Health and Human Services." href="https://samhsa.gov" isExternal />
                    <Card name="Seize The Awkward" description="When the world doesn’t listen, be the friend who does. Get tips and support for talking to your friends about mental health. Operated by the Ad Council." href="https://seizetheawkward.org" isExternal />
                    <Card name="American Foundation for Suicide Prevention" description="Discover the programs AFSP uses to save lives and bring hope to those affected by suicide." href="https://afsp.org" isExternal />
                    <Card name="The JED Foundation" description="The Jed Foundation (JED) is a nonprofit that protects emotional health and prevents suicide for our nation’s teens and young adults." href="https://jedfoundation.org" isExternal />
                    <Card name="Take This" description="A non-profit mental health organization providing comprehensive resources and support that is tailored for the unique needs of the game development community." href="https://takethis.org" isExternal />
                    <Card name="Guardians MH" description="Meaningful resources for the gaming community." href="https://guardiansmh.org" isExternal />
                </div>
            </div>
        </Layout>
    );
}
