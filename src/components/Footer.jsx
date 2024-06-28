import React from 'react'

const Footer = () => {
    return (
        <footer className="footer text-white footer-center bg-primary bg-base-content p-4">
            <aside className="grid-flow-row items-center">
                {/* icons */}
                <p>Copyright © {new Date().getFullYear()} - A.B.C Protectionsupply All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer