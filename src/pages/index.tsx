import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  let [district, setDistrict] = useState<string>()

  useMemo(async () => {
    let query = new URLSearchParams(window.location.search)
    let districtName = query.get('district') || window.localStorage.district || 'none'
    if (districtName == 'none') {
      setDistrict('SupportWell is here to help.')
    } else {
      window.localStorage.district = districtName;
      let districtDataset = await (await fetch(`/data/${districtName}.json`)).json()
      setDistrict(`${districtDataset.name} is here to help.`)
    }
  }, [])

  return (
    <Layout
      title={`Home`}>
      <div style={{ position: 'fixed', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
        <div style={{ textAlign: 'center', border: '3px solid #009b3a', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(6px)', padding: '30px' }}>
          <h1 style={{ color: '#009b3a' }}>It's OK to not be OK.</h1>
          <h2>{district}</h2>
        </div>
      </div>
      <video src="/img/hero.mp4" style={{ objectFit: 'cover', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }} autoPlay loop muted></video>
    </Layout>
  );
}
