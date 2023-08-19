import { one, two, three, four, five } from '../assets/images/pedulilindungi'

import { HomeBanner } from '../assets/images/gym'

import { FaFigma } from 'react-icons/fa'

type DummyDataUser = {
  id: number
  image: string[]
  title: string
  figma: string
  demo: string
}
export const data: DummyDataUser[] = [
  {
    id: 1,
    image: [one, two, three, four, five],
    title:
      'Peduli Lindungi with various features, using MERN Stack and Redux Toolkit',
    figma: '#',
    demo: 'none',
  },
  {
    id: 2,
    image: [HomeBanner],
    title: 'Gym website with admin login to manage articles',
    figma: '#',
    demo: 'https://hendrynews.onrender.com',
  },
]

type DataServiceOffer = {
  id: number
  text: string
}
type ExperienceIcon = {
  id: number
  icon: any
  title: string
  progres: string
}

export const experience: ExperienceIcon[] = [
  {
    id: 1,
    icon: FaFigma,
    title: 'Figma',
    progres: '100%',
  },
]

export const dataServiceOffer: DataServiceOffer[] = [
  {
    id: 1,
    text: 'Application design with the latest technology',
  },
  {
    id: 2,
    text: 'Application design with the latest technology',
  },
  {
    id: 3,
    text: 'Etc',
  },
]
