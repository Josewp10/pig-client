import React  from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as SimpleIcons from 'react-icons/si'

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Control de Retiros',
      path: '/controlRetiros',
      icon: <IoIcons.IoIosNuclear />,
      cName: 'nav-text'
    },
    {
      title: 'Control de Celo',
      path: '/controlCelo',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Control de Tratamientos',
      path: '/controlTratamientos',
      icon: <FaIcons.FaFileMedicalAlt
      />,
      cName: 'nav-text'
    },
    {
      title: 'Tareas',
      path: '/tareas',
      icon: <FaIcons.FaCalendarAlt/>,
      cName: 'nav-text'
    },
    {
      title: 'Bovinos',
      path: '/bovinos',
      icon: <SimpleIcons.SiHappycow />,
      cName: 'nav-text'
    },
    {
      title: 'Medicamentos',
      path: '/medicamentos',
      icon: <FaIcons.FaBriefcaseMedical />,
      cName: 'nav-text'
    }
  ];