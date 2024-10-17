import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex-col min-h-screen " style={{ width: '414px' }}>
            {/* Header */}
            <header className=" flex-row  p-4">

            </header>

            {/* Ana İçerik */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className=" text-white p-4 text-center">
                Footer Content
            </footer>
        </div>
    );
};

export default Layout;
