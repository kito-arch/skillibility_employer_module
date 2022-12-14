import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../asses7/asses7.module.css'
import EmployerNavbar from '../../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Asses7() {
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
            <Image src="/Polygon 6.png" height={50} width={50} />
          </div>
          <p className={styles.line2}></p>

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

        {/* 4thsection */}

        <p className={styles.ql}>Questions lists</p>
        <p className={styles.selected}>
          These are the questions that you are selected for the assessment you
          can modify, add and delete them.
        </p>

        {/* 5th section */}
        {/* 1st */}
        <div className="d-flex">
          <div>
            <Box className={styles.box1}>
              <div className="d-flex">
                <Image
                  src="/1.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.bdr}>Business Development Representive</p>
              </div>
              <p className={styles.c}>
                A C++ Developer is someonecode traditionally for things systems,
                games and embeddedC++ is an extension of C so in
              </p>
              <div className="d-flex">
                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>

            {/* 2nd */}
            <Box className={styles.box1}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.bdr}>Business Development Representive</p>
              </div>
              <p className={styles.c}>
                A C++ Developer is someonecode traditionally for things systems,
                games and embeddedC++ is an extension of C so in
              </p>
              <div className="d-flex">
                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>
          </div>

          {/* 6th section */}
          {/* 1st */}
          <div>
            <Box className={styles.box3}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.cc}>C++</p>

                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>

            {/* 2nd */}
            <Box className={styles.box4}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.cc}>C++</p>

                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>

            {/* 3rd */}
            <Box className={styles.box4}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.cc}>C++</p>

                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>

            {/* 4th */}
            <Box className={styles.box4}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.cc}>C++</p>

                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>

            {/* 5th */}
            <Box className={styles.box4}>
              <div className="d-flex">
                <Image
                  src="/3.png"
                  height={24}
                  width={24}
                  className={styles.no}
                />
                <p className={styles.cc}>C++</p>

                <p className={styles.duration}>Duration 15 min</p>
                <Image
                  src="/trash.png"
                  height={19.83}
                  width={19.83}
                  className={styles.trash}
                />
                <Image
                  src="/preview.png"
                  height={30}
                  width={30}
                  className={styles.pre}
                />
                <p className={styles.pree}>Preview</p>
              </div>
            </Box>
          </div>
        </div>
      </Box>
      <button className={styles.backb}>
        <Image src="/bAck.png" height={42} width={76} />
      </button>
    </>
  )
}
