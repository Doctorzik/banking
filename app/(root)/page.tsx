import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: "Ezekiel", lastName: "Jeremiah", email: "ezekieljeremiah92@gmail.com" }
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficently"
                    />


                    <TotalBalanceBox


                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1300.38}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar user={loggedIn} transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]}
            />
        </section>
    )
}

export default Home

