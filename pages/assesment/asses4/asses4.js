import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../asses4/asses4.module.css'
import EmployerNavbar from '../../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Asses4() {
  return (
    <>
      <EmployerNavbar />
      <Box className={styles.container}>
        {/* 1st section */}

        <div className="d-flex">
          <button className={styles.backarrow}>
            <Image src="/backarrow.png" height={43.5} width={52.5} />
          </button>
          <p className={styles.new}>Back</p>
          <button className={styles.nextarrow}>
            <Image src="/nextarr.png" height={53} width={119} />
          </button>
        </div>

        {/* 2nd section */}

        <div className="d-flex">
          <div className={styles.poly1}>
            <Image src="/Polygon 6.png" height={50} width={50} />
          </div>
          <p className={styles.line2}></p>

          <div className={styles.poly2}>
            <Image src="/Polygon 6.png" height={50} width={50} />
          </div>
          <p className={styles.line2}></p>

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

        <p className={styles.canadd}>
          You can add 5 customs questions in your assessment
        </p>

        {/* 5th sect */}

        <p className={styles.pq}>Select the type of question</p>

        {/* 6th sect */}

        <div className="d-flex">
          {/* 1st */}

          <button className={styles.scbutton}>
            <div className="d-flex">
              <div className={styles.sc}>
                <Image src="/single.png" height={50} width={50} />
              </div>
              <p className={styles.scp}>Single choice</p>
              <div className={styles.info}>
                <Image src="/info 2.png" height={25} width={25} />
              </div>
            </div>
          </button>

          {/* 2nd */}

          <button className={styles.mcbutton}>
            <div className="d-flex">
              <div className={styles.mc}>
                <Image src="/mc (2).png" height={50} width={50} />
              </div>
              <p className={styles.mcp}>Multiple choice</p>
              <div className={styles.info}>
                <Image src="/info 2.png" height={25} width={25} />
              </div>
            </div>
          </button>

          {/* 3rd */}

          <button className={styles.cbutton}>
            <div className="d-flex">
              <div className={styles.vc}>
                <Image src="/coding.png" height={50} width={50} />
              </div>
              <p className={styles.vcp}>Coding</p>
              <div className={styles.info}>
                <Image src="/info 2.png" height={25} width={25} />
              </div>
            </div>
          </button>
        </div>
        {/* 7th section */}

        <div className="d-flex">
          {/* 1st */}

          <button className={styles.fabutton}>
            <div className="d-flex">
              <div className={styles.sc}>
                <Image src="/freeanswers.png" height={50} width={50} />
              </div>
              <p className={styles.scp}>Free Answers</p>
              <div className={styles.info}>
                <Image src="/info 2.png" height={25} width={25} />
              </div>
            </div>
          </button>

          {/* 2nd */}

          <button className={styles.videoque}>
            <div className="d-flex">
              <div className={styles.vc}>
                <Image src="/video.png" height={50} width={50} />
              </div>
              <p className={styles.vcp}>Video</p>
              <div className={styles.info}>
                <Image src="/info 2.png" height={25} width={25} />
              </div>
            </div>
          </button>
        </div>
      </Box>
      <button className={styles.backb}>
        <Image src="/bAck.png" height={42} width={76} />
      </button>
    </>
  )
}
