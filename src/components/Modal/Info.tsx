import { Modal } from 'antd'

const Info = () => {
  Modal.info({
    title: 'Thanks for coming!',
    content: (
      <div>
        <p>If you want to see this in person contact me or check github</p>
      </div>
    ),
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

export default Info
