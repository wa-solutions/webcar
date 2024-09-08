import Link from 'next/link';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { FaCarSide } from 'react-icons/fa6';

export const Sidebar = () => {
  return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
      <Link href={'/admin'} className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
        <span className="fs-4">WebCar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href={'/admin/cars'} className="nav-link active">
            <FaCarSide className='bi pe-none me-2' size={16} />
            Veículos
          </Link>
        </li>
      </ul>
      <Dropdown className="dropdown">
        <DropdownToggle className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
          <strong>mdo</strong>
        </DropdownToggle>
      <DropdownMenu className="dropdown-menu dropdown-menu-dark text-small shadow">
        <DropdownItem className="dropdown-item">New project</DropdownItem>
        <DropdownItem className="dropdown-item">Settings</DropdownItem>
        <DropdownItem className="dropdown-item">Profile</DropdownItem>
        <DropdownItem className="dropdown-divider"><hr className="dropdown-divider" /></DropdownItem>
        <DropdownItem className="dropdown-item">Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </aside>
  )
}