import React, { useCallback, useEffect } from 'react';

import { useLazyQuery } from 'react-apollo';
import queries from '../../graphql/queries';
import Progressbar from '../common/loading/Progressbar';

import './AboutMe.css';
import Company from './Company';
import Footer from '../common/footer/Footer';

const AboutMe = () => {
    const [runQuery, { data }] = useLazyQuery(queries.MY_PROFILE_QUERY);
    const getProfileData = useCallback(() => runQuery({ variables: { id: '1' } }), [runQuery]);

    useEffect(() => {
        if(!data) {
            getProfileData();
        }
    }, [data, getProfileData]);

    const profile = data && data.profile ? data.profile : null;
    const companies = profile && profile.companies ? JSON.parse(profile.companies) : [];

    return (
        <>
            { profile ? (
                <div className='center-container about-me-container slow-transition-container'>
                    <h1>{profile.firstName} {profile.lastName}</h1>
                    <img alt='my-profile' className='porfolio-image' src={profile.imageUrl}/>
                    <div>
                        <h2 style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Experience</h2>
                        <div className='row'>
                            {
                                companies.map((company, i) => (
                                    <Company company={company} key={i}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) : (<Progressbar message='Fetching profile'/>)}
            <Footer hasMode/>
        </>
        
    );
};
 
export default AboutMe;