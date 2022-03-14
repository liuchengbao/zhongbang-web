export interface mainServiceProps {
  icon: string
  title: string
  text: string
}

export interface companyContentProps {
  icon: string
  text: string
}

export interface companyProps {
  title: string
  content: companyContentProps[]
}

export interface productProps {
  title: string
  detail: string
  tags: string[]
  price: string
}

export interface informationContentProps {
  cover: string
  title: string
  intro: string
}

export interface informationProps {
  name: string
  content: informationContentProps[]
}

export interface partnerProps {
  logo: string
  width: number
  height: number
}

export interface footerContentProps {
  title: string
  list: { title: string; url: string }[]
}
