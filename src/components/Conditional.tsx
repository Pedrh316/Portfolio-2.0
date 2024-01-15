import { Children } from '../types/Children'

interface IConditional extends Children {
    condition:boolean;
}

const Conditional = ({children, condition}:IConditional) => {
  return (
    condition &&
    <>{children}</>
  )
}

export default Conditional