import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../employernavbar/navbar.module.css'
import Box from '@material-ui/core/Box'
export default function EmployerNavbar() {
  return (
    <>
      <Box className={styles.container}>
        <div className="d-flex">
          <div className={styles.logo}>
            <Image src="/logo.png" height={53} width={206} />
          </div>
          <button className={styles.assesment}>Assessment</button>
          <button className={styles.candidate}>Candidates</button>
          <button className={styles.testlibrary}>Test library</button>
          <div className={styles.profile}>
            <Image src="/eprofile.png" height={40} width={40} />
          </div>
          <div className={styles.dropdown}>
            <a
              class=" dropdown-toggle"
              role="button"
              data-toggle="dropdown"
            ></a>
          </div>
        </div>
      </Box>
    </>
  )
}
