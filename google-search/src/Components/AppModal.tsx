import { useRef, forwardRef,useImperativeHandle } from "react";
import { createPortal } from "react-dom";

interface ModalProps{
    action?: String
}

const AppsModal = forwardRef<{open: () => void}, ModalProps>(function Modal({action},ref)
{
    const dialog = useRef<HTMLDialogElement>(null)
    useImperativeHandle(ref,()=>{
        return{
            open: () => {
                if(dialog.current){
                    dialog.current.showModal()
                }
            }
        }
    })
    const modalContainer = document.getElementById("modal");

    if (!modalContainer) {
        console.error("Modal container not found.");
        return null;
    }

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h1>app</h1>
        </dialog>,
        modalContainer    )
})



export default AppsModal
