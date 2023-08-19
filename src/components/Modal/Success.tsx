import { Modal } from 'antd'

const Success = () => {
  Modal.success({
    title: 'Email sent successfully',
    content: 'We will immediately respond to your message',
    onOk() {},
    okButtonProps: {
      className: 'bg-[var(--color-primary)] text-white',
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      top: 0,
    },
    open: true,
  })
}

export default Success
