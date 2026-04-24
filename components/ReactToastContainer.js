import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

const ReactToastContainer = ({ children }) => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            {children}
        </>
    )
}

export default ReactToastContainer
