
interface InputFormLoginProps {
    text: string,
    type: string,
}

export function InputFormLogin({text, type}: InputFormLoginProps) {
  return (
    <div className="mb-6">
            <input
              type={type}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id={'Input' + type}
              placeholder={text}
            />
          </div>
  )
}
