import { FC } from 'react'

interface InputProps {
  placeholder: string
}

const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="input-wrapper bg-green-50">
      <textarea className="text-center w-[182px] h-[92px] bg-white"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;