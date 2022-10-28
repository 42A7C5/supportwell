import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Card from '../components/Card';
import Link from '@docusaurus/Link';

export default function BullyingPage(): JSX.Element {
    return (
        <Layout
            title={`Emergency`}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Emergency</h1>
                <h2>If you're in serious danger, call <span style={{ color: 'red' }}>911</span>.</h2>
                <h3>
                    Text SCHOOL to 741741 and get connected with a trained crisis counselor.
                    <br />
                    Text or call 211 for community guidance and support.
                    <br />
                </h3>
            </div>
        </Layout>
    );
}
