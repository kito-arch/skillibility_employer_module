import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../asses1/asses1.module.css'
import EmployerNavbar from '../../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Asses1() {
  return (
    <>
      <EmployerNavbar />
      <Box className={styles.container}>
        {/* 1st section */}

        <div className="d-flex">
          <button className={styles.backarrow}>
            <Image src="/backarrow.png" height={43.5} width={52.5} />
          </button>
          <p className={styles.new}>Create new asessment</p>
          <button className={styles.nextarrow}>
            <Image src="/nextarr.png" height={53} width={119} />
          </button>
        </div>

        {/* 2nd section */}

        <div className="d-flex">
          <div className={styles.poly1}>
            <Image src="/Polygon 2.png" height={50} width={50} />
          </div>
          <p className={styles.line1}></p>

          <div className={styles.poly2}>
            <Image src="/Polygon 9.png" height={50} width={50} />
          </div>
          <p className={styles.line1}></p>

          <div className={styles.poly2}>
            <Image src="/Polygon 9.png" height={50} width={50} />
          </div>
          <p className={styles.line1}></p>

          <div className={styles.poly2}>
            <Image src="/Polygon 9.png" height={50} width={50} />
          </div>
        </div>

        {/* 3rd section */}

        <div className="d-flex">
          <p className={styles.p1}>Assessment name</p>
          <p className={styles.p2}>Select test</p>
          <p className={styles.p3}>Add questions</p>
          <p className={styles.p4}>Review questions</p>
        </div>

        {/* 4th section */}

        <div className="d-flex">
          <p className={styles.role}>Job Role</p>
          <Image
            src="/newjob.png"
            height={17.5}
            width={17.5}
            className={styles.what}
          />
        </div>
        <Box className={styles.box1}>
          <div className="d-flex">
            <input type="text" className={styles.input} />
            <Image
              src="/dropdown (2).png"
              height={9}
              width={16}
              className={styles.dropdown}
            />
          </div>
        </Box>
        {/* 5th section */}
        <div className="d-flex">
          <p className={styles.newasses}>Name Assessment</p>
          <Image
            src="/newjob.png"
            height={17.5}
            width={17.5}
            className={styles.what2}
          />
        </div>
        <input type="text" className={styles.box1} />

        {/* 6th section */}

        <p className={styles.no}>How many people you want to hire</p>
        <Box className={styles.box1}>
          <div className="d-flex">
            <input type="text" className={styles.input2} />
            <Image
              src="/dropdown (2).png"
              height={9}
              width={16}
              className={styles.dropdown}
            />
          </div>
        </Box>

        {/* 7th section */}

        <Box className={styles.hpeople}>
          <p className={styles.p}>Less than 5</p>
          <p className={styles.p}>Between 5-10</p>
          <p className={styles.p}>Between 10-20</p>
          <p className={styles.p}>Between 20-50</p>
          <p className={styles.p}>Between 50-100</p>
          <p className={styles.p}>More than 100</p>
        </Box>
      </Box>
    </>
  )
}
