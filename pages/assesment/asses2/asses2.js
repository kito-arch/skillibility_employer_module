import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../asses2/asses2.module.css'
import EmployerNavbar from '../../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Asses2() {
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
          <p className={styles.canadd}>
            You can add 3 to 5 different test in your assessment
          </p>
          <Box className={styles.searchbox}>
            <Image
              src="/search2.png"
              height={27}
              width={24}
              className={styles.search}
            />
            <input
              type="text"
              placeholder="Search by role or skill"
              className={styles.skill}
            />
          </Box>
        </div>

        {/* 5th section */}
        {/* 1st */}

        <div className="d-flex">
          {/* 1st */}
          <Box className={styles.box1}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>

          {/* 2nd */}
          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>

          {/* 3rd */}

          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>
          {/* 4th */}

          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>
        </div>

        {/* 6th section */}
        {/* 1st */}

        <div className="d-flex">
          <Box className={styles.box1}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              {' '}
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>

          {/* 2nd */}
          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>

          {/* 3rd */}

          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>
          {/* 4th */}

          <Box className={styles.box}>
            <p className={styles.pp1}>Business Development Representative</p>
            <p className={styles.pp2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed withthe overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.detail}>
                <Image src="/details.png" height={42} width={82} />
              </div>
              <div className={styles.add}>
                <Image src="/addd.png" height={42} width={61} />
              </div>
            </div>
          </Box>
        </div>
      </Box>
      <button className={styles.backb}>
        <Image src="/bAck.png" height={42} width={76} />
      </button>
    </>
  )
}
