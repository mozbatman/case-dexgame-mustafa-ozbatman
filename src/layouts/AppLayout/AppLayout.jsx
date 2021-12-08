import * as React from "react";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import styles from './AppLayout.module.scss';

const AppLayout = ({ header, footer, children }) => {

    return (
        <div id="layout-app" className={styles.layoutApp}>
            {header && <Header />}
            <div className={styles.mainContent}>{children}</div>
            {footer && <Footer />}
        </div>
    );
};

export default AppLayout;
