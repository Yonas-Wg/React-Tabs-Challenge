import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tabs = () => {
    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cache, setCache] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                const requests = Array.from({ length: 4 }, (_, index) => {
                    const id = index + 1;

                    // Check if data is already in cache
                    if (cache[id]) {
                        return Promise.resolve(cache[id]);
                    }

                    // Fetch data from the Loripsum API through AllOrigins
                    return axios.get(`https://allorigins.hexm.io/get?url=${encodeURIComponent('https://loripsum.net/api/1/short/plaintext')}`)
                        .then(response => {
                            const content = response.data.contents; // Access the contents field
                            setCache(prev => ({ ...prev, [id]: content }));
                            return content;
                        });
                });

                const results = await Promise.all(requests);
                const tabData = results.map((content, index) => ({
                    id: index + 1,
                    tabTitle: `Tab ${index + 1}`,
                    title: `Title ${index + 1}`,
                    content
                }));
                setTabs(tabData);
            } catch (error) {
                console.error('Error fetching tabs:', error);
                setError('Failed to load tabs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTabs();
    }, [cache]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='tabs-container'>
            <ul className='tabs'>
                {tabs.map((tab, index) => (
                    <li 
                        key={tab.id} 
                        onClick={() => setActiveTab(index)} 
                        className={activeTab === index ? 'active' : ''}
                    >
                        {tab.tabTitle}
                    </li>
                ))}
            </ul>
            <div className='tab-content'>
                {tabs[activeTab] && (
                    <div>
                        <h2>{tabs[activeTab].title}</h2>
                        <p>{tabs[activeTab].content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;
