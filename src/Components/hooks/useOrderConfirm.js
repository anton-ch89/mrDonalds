import {useState} from 'react'

function useOrderConfirm() {

    const [openOrderConfirm, setOpenOrderConfirm] = useState(false)
    return { openOrderConfirm, setOpenOrderConfirm }
}

export default useOrderConfirm
