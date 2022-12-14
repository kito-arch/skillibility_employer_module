import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../candidates/candidate.module.css'
import EmployerNavbar from '../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Candidates() {
  return (
    <>
      <EmployerNavbar />
      <Box className={styles.container}>
        <div className="d-flex">
          <p className={styles.testlibrary}>Test Library</p>
          <button className={styles.createnew}>
            <div className="d-flex">
              <div className={styles.addimage}>
                <Image src="/addnew.png" height={24} width={24} />
              </div>
              <p className={styles.new}>create new assessment</p>
            </div>
          </button>
        </div>
        <div className="d-flex">
          <Box className={styles.box1}>
            <div className="d-flex">
              <div className={styles.search}>
                <Image src="/search2.png" height={24} width={24} />
              </div>
              <input
                type="text"
                placeholder="Search candidate"
                className={styles.input}
              />
            </div>
          </Box>
          <Box className={styles.box2}>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Assesment"
                className={styles.input}
              />
              <div className={styles.dropdown}>
                <a
                  class=" dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                ></a>
              </div>
            </div>
          </Box>
        </div>

        {/* image */}
        <div className={styles.candidates2}>
          <Image src="/candidates.png" height={352} width={750} />
        </div>
        <p className={styles.candidates}>You don’t have any candidates.</p>
        <div className="d-flex">
          <div className={styles.link}>
            <Link href="/Assesment">Create an assessment</Link>
          </div>
          <p className={styles.invite}> and invites candidates to take it</p>
        </div>
      </Box>
    </>
  )
}
