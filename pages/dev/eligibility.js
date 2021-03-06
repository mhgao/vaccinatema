import React from 'react';

import Layout from '../../components/Layout';

// TODO: should the phase and group be set to variables?

const Eligibility = () => (
    <Layout pageTitle="Eligibility">
        <div id="eligibility-page">
            <h1>Eligibility</h1>
            <p>
                Massachusetts is now in vaccine eligibility Phase 2, Group 2,
                which started on Febuary 18, 2021. Please check all eligibility
                requirements below and sign up for your appointment in advance
                using the link or phone number included in the site location’s
                details. Note that minors (16-17 years old) are only eligible to
                receive the Pfizer vaccine, not Moderna. Vaccination locations
                are available only to those within active and eligible priority
                groups as a part of the Massachusetts{' '}
                <a
                    href="https://www.mass.gov/info-details/covid-19-vaccine-distribution-timeline-phase-overview"
                    target="_blank"
                    rel="noreferrer"
                >
                    vaccine distribution timeline
                </a>
                . Individuals must present proof of their eligibility to receive
                the vaccine. <b>All sites require appointments.</b>
            </p>
            <img
                className="eligibility-image"
                src="https://www.mass.gov/files/styles/embedded_full_width/public/images/2021-02/covidvaccine_phases-1-and-2ab-timing-by-group_social_1920x1080-no-url.png"
                alt="COVID-19 Vaccination in MA: Phase 1 and 2 Eligibility Status"
            />
        </div>
    </Layout>
);

export default Eligibility;
