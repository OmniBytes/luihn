import Link from 'next/link'

const Nav = () => {
  console.log('plz render')

  return (
    <nav>
      <div className="navbar navbar--extended">
        <nav className="nav__mobile" />
        <div className="container">
          <div className="navbar__inner">
            <Link href="/">
              <a className="navbar__logo">Luihn VantEdge Partners</a>
            </Link>
            <nav className="navbar__menu">
              <ul>
                <li>
                  <a href="#">Coming Soon!</a>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="navbar__menu-mob">
              <a href="" id="toggle">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    className=""
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
