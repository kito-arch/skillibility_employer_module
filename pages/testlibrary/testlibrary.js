import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import styles from '../testlibrary/testlibrary.module.css'
import EmployerNavbar from '../employernavbar/navbar'
import Box from '@material-ui/core/Box'
export default function Testlibrary() {
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
                placeholder="Search test"
                className={styles.input}
              />
            </div>
          </Box>
          <Box className={styles.box2}>
            <div className="d-flex">
              <input type="text" placeholder="Type" className={styles.input} />
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

        {/* 1st row*/}

        <div className="d-flex">
          <Box className={styles.box}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
        </div>

        {/* 2nd row*/}

        <div className="d-flex">
          <Box className={styles.box}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
        </div>

        {/* 3rd row*/}

        <div className="d-flex">
          <Box className={styles.box}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>

          {/* 4th row*/}
        </div>
        <div className="d-flex">
          <Box className={styles.box}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
          <Box className={styles.box3}>
            <p className={styles.p1}>Business Development Representative</p>
            <p className={styles.p2}>
              A C++ Developer is someone code traditionally for things systems,
              games and embedded C++ is an extension of C so in it is a very
              powerful language for code to be executed with the overhead of
              other such as java
            </p>
            <p className={styles.line}></p>
            <div className="d-flex">
              <div className={styles.eye}>
                <Image src="/eye2.png" height={50} width={60} />
              </div>
              <button className={styles.details}>Details</button>
            </div>
          </Box>
        </div>
      </Box>
    </>
  )
}
