import Disclaimer from '@/components/Commmon/Disclaimer';
import Footer from '@/components/Commmon/Footer';
import Header from '@/components/Commmon/Header';
import SupportHeader from '@/components/Commmon/SupportHeader';
import React from 'react'

const RootLayout: React.FC<Readonly<{
    children: React.ReactNode;
}>> = ({ children }) => {
    return (
        // <Provider store={store}>

        <main>
            <SupportHeader />
            <Header />
            {children}
            <Footer />
            <Disclaimer />
        </main>
        // </Provider>
    )
}

export default RootLayout