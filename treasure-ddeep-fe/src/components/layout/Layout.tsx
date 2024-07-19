import React from 'react'
import styles from "./Layout.module.css"
import {isMobile} from "react-device-detect";

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <div className={isMobile ? styles.mainMobile : styles.mainPC}>
                {props.children}
            </div>
        </>
    )
}

export default Layout