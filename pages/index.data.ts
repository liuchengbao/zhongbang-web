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
