import React from 'react'
import Header from './Header'
import DashboardContent from './DashboardContent'

const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-100 h-screen">
                <Header />
                <DashboardContent />
            </div>
        </>
    )
}

export default Dashboard