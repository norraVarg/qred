interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = (props: Props) => {
  const { children, isOpen, onClose } = props

  return (
    <dialog className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-4 rounded shadow-lg">{children}</div>
    </dialog>
  )
}

export default Modal

